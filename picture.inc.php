<?php
/***********************************************
* File      :   forecast.inc.php
* Project   :   piwigo-forecast
* Descr     :   Display forecast on the right panel
*
* Created   :   23.04.2015
*
* Copyright 2013-2015 <xbgmsharp@gmail.com>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
************************************************/

// Hook to add the div in the right menu, No idea about the number!!
add_event_handler('loc_begin_picture', 'forecast_loc_begin_picture', 56);

// Hook to populate the div in the right menu, No idea about the number after!!
add_event_handler('loc_begin_picture', 'forecast_render_element_content', EVENT_HANDLER_PRIORITY_NEUTRAL+1 /*in order to have picture content*/, 2);

function forecast_loc_begin_picture()
{
    global $template;
    $template->set_prefilter('picture', 'forecast_insert_map');
}

function forecast_insert_map($content, &$smarty)
{
    global $conf;
    load_language('plugin.lang', FORECAST_PATH);

    $search = '#<div id="'. $conf['forecast_conf']['add_before'] .'" class="imageInfo">#';

    $replacement = '
<div id="forecast-info" class="imageInfo">
    <dt>Forecast</dt>
    <dd>
            <section class="currently section">
              <div class="inner">
<!--
                <h2>RIGHT NOW <span class="more_button pictos">+</span></h2>
-->

                <div class="current_container">
                  <div class="less">
                   <canvas id="icon_current" width="82" height="82" style="width:82px; height: 82px"></canvas>
                   <div class="temp">{$FORECAST_TEMP}</div>
                   <div class="desc">{$FORECAST_SUMMARY}</div>
                  </div>

<!--
                  <div class="more">
                    <div class="temps">
                      <div class="dir m"></div>
                      <div class="high_low"></div>
                    </div>

                    <div class="table">
                      <div class="wind">
                        <span class="label">Wind:</span>
                        <span class="val"></span>
                      </div>
                      <div class="humidity">
                        <span class="label">Humidity:</span>
                        <span class="val"></span>
                      </div>
                      <div class="dewpoint">
                        <span class="label">Dew Pt:</span>
                        <span class="val"></span>
                      </div>
                      <div class="visibility">
                        <span class="label">Visibility:</span>
                        <span class="val"></span>
                      </div>
                      <div class="pressure">
                        <span class="label">Pressure:</span>
                        <span class="val"></span>
                      </div>
                    </div>
                  </div>
-->
                </div>

              </div>
            </section>
        <div id="forecast_attrib" style="visibility: hidden; display: none;">
            <ul>
                <li>{"PLUGIN_BY"|@translate}</li>
                <li><a href="http://forecast.io/" target="_blank">Powered by Forecast</a></li>
            </ul>
        </div>
        {if $SHOWFORECAST}
        <a href="{$FORECAST_LINK}" target="_blank">{"VIEW_FORECAST"|@translate}</a>
        {/if}
    </dd>
</div>
<div id="Categories" class="imageInfo">
';

    return preg_replace($search, $replacement, $content);
}

function forecast_render_element_content()
{
    global $template, $picture, $page, $conf;
    load_language('plugin.lang', FORECAST_PATH);

    if (empty($page['image_id']))
    {
        return;
    }

    // Load coordinates and date_creation from picture
    $query = 'SELECT latitude,longitude,UNIX_TIMESTAMP(date_creation) as date FROM '.IMAGES_TABLE.' WHERE id = \''.$page['image_id'].'\' ;';
    //FIXME LIMIT 1 ?
    $result = pwg_query($query);
    $row = pwg_db_fetch_assoc($result);
    if (!$row or !$row['latitude'] or empty($row['latitude']) or !$row['date'] or empty($row['date']))
    {
        return;
    }
    $lat = $row['latitude'];
    $lon = $row['longitude'];
    $date = $row['date'];

    // Load parameter, fallback to default if unset
    $fc_height = isset($conf['forecast_conf']['height']) ? $conf['forecast_conf']['height'] : '200';
    $fc_name = isset($conf['forecast_conf']['link']) ? $conf['forecast_conf']['link'] : 'Forecast';
    $fc_namecss = isset($conf['forecast_conf']['linkcss']) ? $conf['forecast_conf']['linkcss'] : '';
    $fc_show = isset($conf['forecast_conf']['show']) ? $conf['forecast_conf']['show'] : 'true';
    $fc_api_key = isset($conf['forecast_conf']['api_key']) ? $conf['forecast_conf']['api_key'] : '';
    if (strlen($fc_namecss) != 0)
    {
        $fc_css = "style='".$fc_namecss."'";
    }
    $fc_link="http://forecast.io/#/f/".$lat.",".$lon;

    //  Init Forecast.io lib
    include('lib/forecast.io.php');
    $units = 'auto';  // Can be set to 'us', 'si', 'ca', 'uk' or 'auto' (see forecast.io API); default is auto
    // TODO from the user language paramter
    $lang = 'en'; // Can be set to 'en', 'de', 'pl', 'es', 'fr', 'it', 'tet' or 'x-pig-latin' (see forecast.io API); default is 'en'
    /* Do we have a Forecast.io API key */
    if (strlen($fc_api_key) != 0)
    {
	// Make a request to Forecast.io using the user supply API, proxy set to false
	$forecast = new ForecastIO($fc_api_key, $units, $lang, false);
    }
    else // We do NOT have a Key
    {
	/**
         * Make a request to https://forecast-xbgmsharp.rhcloud.com
         * to non disclose the Forecast.io API key, proxy set to true
         * Source code at https://github.com/xbgmsharp/nodejs-forecast
         **/
	$forecast = new ForecastIO($fc_api_key, $units, $lang, true);
    }
    $condition = $forecast->getHistoricalConditions($lat, $lon, $date);
    //print_r($condition);

    // Select the template
    $template->set_filenames(
            array('forecast_content' => dirname(__FILE__)."/template/picture.tpl")
    );

    // Assign the template variables
    $template->assign(
        array(
            'FORECAST_HEIGHT'	=> $fc_height,
            'FORECAST_PATH'	=> embellish_url(get_gallery_home_url().FORECAST_PATH),
            'FORECAST_NAME'	=> $fc_name,
            'FORECASTNAMECSS'	=> $fc_namecss,
            'SHOWFORECAST'	=> $fc_show,
            'FORECAST_LINK'	=> $fc_link,
            'FORECAST_SUMMARY'	=> $condition->summary ." · Feels like ". round($condition->apparentTemperatureMax, 0) ."°",
            'FORECAST_TEMP'	=> round($condition->temperatureMax, 0)."°",
            'FORECAST_ICON'	=> $condition->icon,
        )
    );

    // Return the rendered html
    $forecast_content = $template->parse('forecast_content', true);
    return $forecast_content;
}
