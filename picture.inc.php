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
{if $FORECAST_DATA}
<div id="forecast-info" class="imageInfo">
    <dt>{$FORECAST_NAME}</dt>
    <dd>';

    if($conf['forecast_conf']['mode']) {

        $replacement .= '
           <i>{$FORECAST_DATA->summary}</i> <br/>
            Max temp: <b>{$FORECAST_DATA->temperatureMax}</b> at {$FORECAST_DATA->temperatureMaxTime}<br/>
            Min temp: <b>{$FORECAST_DATA->temperatureMin}</b> at {$FORECAST_DATA->temperatureMinTime}<br/>
            Wind: <b>{$FORECAST_DATA->windSpeed}</b> winds from the {$FORECAST_DATA->windDirection}<br/>
            Humidity: <b>{$FORECAST_DATA->humidity}</b><br/>
            Pressure: <b>{$FORECAST_DATA->pressure}</b><br/>
            Sunrise: <b>{$FORECAST_DATA->sunriseTime}</b><br/>
            Sunset: <b>{$FORECAST_DATA->sunsetTime}</b><br/>';

    } else {

        $replacement .= '
            <section class="currently section">
              <div class="inner">
                <h2>{$FORECAST_DATA->time}<span class="more_button pictos">+</span></h2>

                <div class="current_container">
                  <div class="less">
                    <canvas id="icon_current" width="164" height="164" style="width:82px; height: 82px"></canvas>
                    <div class="temp"><span>{$FORECAST_DATA->temperatureMax}</span></div>
                    <div class="desc">{$FORECAST_DATA->summary}</div>
                  </div>

                  <div class="more">
                    <div class="temps">
                      <div class="dir m">Sun rose at <span class="m">{$FORECAST_DATA->sunriseTime}</span><br>and set at <span class="m">{$FORECAST_DATA->sunsetTime}</span>.</div>
                      <div class="high_low">Low, <span class="m">{$FORECAST_DATA->temperatureMin}</span> at <span class="m">{$FORECAST_DATA->temperatureMinTime}</span>,<br>High, <span class="m">{$FORECAST_DATA->temperatureMax}</span> at <span class="m">{$FORECAST_DATA->temperatureMaxTime}</span>.</div>
                    </div>

                    <div class="table">
                      <div class="wind">
                        <span class="label">Wind:</span>
                        <span class="val">{$FORECAST_DATA->windSpeed}<div class="windicator {$FORECAST_DATA->windFrame}" "="" title="{$FORECAST_DATA->windSpeed} winds from the {$FORECAST_DATA->windDirection}"></div></span>
                      </div>
                      <div class="humidity">
                        <span class="label">Humidity:</span>
                        <span class="val">{$FORECAST_DATA->humidity}</span>
                      </div>
                      <div class="dewpoint">
                        <span class="label">Dew Pt:</span>
                        <span class="val">{$FORECAST_DATA->dewPoint}</span>
                      </div>
                      <div class="visibility">
                        <span class="label">Visibility:</span>
                        <span class="val">{$FORECAST_DATA->visibility}</span>
                      </div>
                      <div class="pressure">
                        <span class="label">Pressure:</span>
                        <span class="val">{$FORECAST_DATA->pressure}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
     ';
    }

    $replacement .= '
        <div id="forecast_attrib" style="visibility: hidden; display: none;">
            <ul>
                <li>{"PLUGIN_BY"|@translate}</li>
                <li><a href="http://forecast.io/" target="_blank">Powered by Forecast</a></li>
            </ul>
        </div>
        {if $FORECAST_SHOW_LINK}
        <a href="{$FORECAST_LINK}" target="_blank">{"VIEW_FORECAST"|@translate}</a>
        {/if}
    </dd>
</div>
{/if}
<div id="Categories" class="imageInfo">
';

    return preg_replace($search, $replacement, $content);
}

function forecast_render_element_content()
{
    global $template, $picture, $page, $conf;
    load_language('plugin.lang', FORECAST_PATH);

    if (empty($page['image_id']) and !is_numeric($page['image_id']))
    {
        return;
    }

    // Load coordinates and date_creation from picture
    $query = "SELECT latitude,longitude,date FROM forecast WHERE id='".$page['image_id']."';";
    //FIXME LIMIT 1 ?
    $result = pwg_query($query);
    $row = pwg_db_fetch_assoc($result);
    if (!isset($row) or !isset($row['latitude']) or empty($row['latitude']) or
	!isset($row['longitude']) or empty($row['longitude']) or
        !isset($row['date']) or empty($row['date']))
    {
        return;
    }
    $lat = $row['latitude'];
    $lon = $row['longitude'];
    $date = $row['date'];

    // Load parameter, fallback to default if unset
    $fc_height = isset($conf['forecast_conf']['height']) ? $conf['forecast_conf']['height'] : '200';
    $fc_header = isset($conf['forecast_conf']['link']) ? $conf['forecast_conf']['link'] : 'Overcast';
    $fc_color_bkg = isset($conf['forecast_conf']['color_bkg']) ? $conf['forecast_conf']['color_bkg'] : 'FFF';
    $fc_color_txt = isset($conf['forecast_conf']['color_txt']) ? $conf['forecast_conf']['color_txt'] : '222';
    $fc_show_link = isset($conf['forecast_conf']['show']) ? $conf['forecast_conf']['show'] : 'true';
    $fc_api_key = isset($conf['forecast_conf']['api_key']) ? $conf['forecast_conf']['api_key'] : '';
    $fc_link="http://forecast.io/#/f/".$lat.",".$lon;
    $fc_color['bkg'] = '#'.$fc_color_bkg;
    $fc_color['txt'] = '#'.$fc_color_txt;

    //  Init Forecast.io lib
    include('lib/forecast.io.php');
    // Can be set to 'us', 'si', 'ca', 'uk' or 'auto' (see forecast.io API); default is auto
    // Can be set to 'en', 'de', 'pl', 'es', 'fr', 'it', 'tet' or 'x-pig-latin' (see forecast.io API); default is 'en'
    $fc_unit = isset($conf['forecast_conf']['unit']) ? $conf['forecast_conf']['unit'] : 'auto';
    $fc_lang = isset($conf['forecast_conf']['lang']) ? $conf['forecast_conf']['lang'] : 'en';
    /* Do we have a Forecast.io API key */
    if (strlen($fc_api_key) != 0)
    {
	// Make a request to Forecast.io using the user supply API, proxy set to false
	$forecast = new ForecastIO($fc_api_key, $fc_unit, $fc_lang, false);
    }
    else // We do NOT have a Key
    {
	/**
         * Make a request to https://forecast-xbgmsharp.rhcloud.com
         * to non disclose the Forecast.io API key, proxy set to true
         * Source code at https://github.com/xbgmsharp/nodejs-forecast
         **/
	$forecast = new ForecastIO($fc_api_key, $fc_unit, $fc_lang, true);
    }
    $condition = $forecast->getHistoricalConditions($lat, $lon, $date);
    if (!isset($condition) or $condition === 'false') { return; }
    //print_r($condition);

    // Parse weather condition to human readable
    $condition = parseCondition($condition);

    // Select the template
    $template->set_filenames(
            array('forecast_content' => dirname(__FILE__)."/template/picture.tpl")
    );

    // Assign the template variables
    $template->assign(
        array(
            'FORECAST_HEIGHT'	=> $fc_height,
            'FORECAST_PATH'	=> embellish_url(get_gallery_home_url().FORECAST_PATH),
            'FORECAST_NAME'	=> $fc_header,
            'FORECAST_COLOR'	=> $fc_color,
            'FORECAST_SHOW_LINK' => $fc_show_link,
            'FORECAST_LINK'	=> $fc_link,
            'FORECAST_DATA'     => $condition,
        )
    );

    // Return the rendered html
    $forecast_content = $template->parse('forecast_content', true);
    return $forecast_content;
}


/**
  * Parse condition to human readable according to unit
  *
  */
function parseCondition($condition) {
    // Set timezone for date/time calculation
    date_default_timezone_set($condition->timezone);
    foreach ( $condition as $key => $value ) {
	// Round Temperature and add degrees
	if (preg_match("/^temperature/", $key)) { $condition->$key = round($value, 0).'°'; }
	// Convert temperature timestamp value to an human readable value
	if (preg_match("/^temperature.*Time$/", $key)) { $condition->$key = date('G', $value); }
	// Convert Sun timestamp value to an human readable value
	if (preg_match("/^sun.*Time$/", $key)) { $condition->$key = date('G:i', $value); }
	if (preg_match("/^windSpeed/", $key))
	{
		if ($condition->units == "si") { $condition->$key = round($value*3.6, 0).' km/h'; }
		else if ($condition->units == "ca") { $condition->$key = round($value, 0).' km/h'; }
		else if ($condition->units == "us" || $condition->units == "uk") { $condition->$key = round($value, 0).' mph'; }
	}
	if (preg_match("/^humidity/", $key)) { $condition->$key = round($value*100, 0).'%'; }
	if (preg_match("/^pressure/", $key)) { $condition->$key = round($value, 0).' mb'; }
	if (preg_match("/^dewPoint/", $key)) { $condition->$key = round($value, 0); }
	if (preg_match("/^visibility/", $key))
	{
		if ($condition->units == "us") { $condition->$key = round($value, 0).'mi'; }
		else { $condition->$key = round($value, 0).' km'; }
	}
	// Convert WindBearing to an human readable value
	if (preg_match("/^windBearing/", $key))
	{
		$direction = preg_split("/\//", getCompassDirection($value));
		if (is_array($direction)) {
			$condition->windDirection = $direction[0];
			$condition->windFrame = $direction[1];
		}
	}
	if (preg_match("/^time$/", $key)) { $condition->$key = date('l j F Y', $value); }
    }
    return $condition;
}


/**
  * http://climate.umn.edu/snow_fence/Components/winddirectionanddegreeswithouttable3.htm
  * https://www.dougv.com/2009/07/calculating-the-bearing-and-compass-rose-direction-between-two-latitude-longitude-coordinates-in-php/
  * Convert a bearing (numeric) and returns a 16-point compass rose direction alone with the wind Direction frame
  */
function getCompassDirection($bearing) {
     if (!isset($bearing) and !is_numeric($bearing)) { return '-'; }
     $tmp = round($bearing / 22.5);
     switch($tmp) {
          case 1:
               $direction = "NNE/frame_5";
               break;
          case 2:
               $direction = "NE/frame_5";
               break;
          case 3:
               $direction = "ENE/frame_5";
               break;
          case 4:
               $direction = "E/frame_6";
               break;
          case 5:
               $direction = "ESE/frame_7";
               break;
          case 6:
               $direction = "SE/frame_7";
               break;
          case 7:
               $direction = "SSE/frame_7";
               break;
          case 8:
               $direction = "S/frame_0";
               break;
          case 9:
               $direction = "SSW/frame_1";
               break;
          case 10:
               $direction = "SW/frame_1";
               break;
          case 11:
               $direction = "WSW/frame_1";
               break;
          case 12:
               $direction = "W/frame_2";
               break;
          case 13:
               $direction = "WNW/frame_3";
               break;
          case 14:
               $direction = "NW/frame_3";
               break;
          case 15:
               $direction = "NNW/frame_3";
               break;
          default:
               $direction = "N/frame_4";
     }
     return $direction;
}
