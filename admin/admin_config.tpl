{'PLG_FORECAST'|@translate}
<br/><br/>
Refer to the <a href="https://github.com/xbgmsharp/piwigo-forecast/wiki" target="_blanck">plugin documentation</a> for additional information. Create an <a href="https://github.com/xbgmsharp/piwigo-forecast/issues" target="_blanck">issue</a> for support, or feedback, or feature request.

<form method="post" action="" class="properties" id="forecast_config">
<fieldset>
   <legend>{'Configuration'|@translate}</legend>
    <ul>
	<li>
            <label>{'ADD_BEFORE'|@translate} : </label>
            <select name="fc_add_before">
                    {html_options options=$AVAILABLE_ADD_BEFORE selected=$fc.add_before}
            </select>
            <br/><small>{'ADD_BEFORE_DESC'|@translate}</small>
        </li>
        <li>
            <label>{'COLOR_BKG'|@translate} : </label>
            <input type="text" value="{$fc.color_bkg}" name="fc_color_bkg" size="4" id="fc_color_bkg" placeholder="#FFF" required=""/>
            <br/><small>{'COLOR_BKG_DESC'|@translate}</small>
        </li>
        <li>
            <label>{'COLOR_TEXT'|@translate} : </label>
            <input type="text" value="{$fc.color_txt}" id="fc_color_txt" name="fc_color_txt" size="4" placeholder="#222" required=""/>
            <br/><small>{'COLOR_TEXT_DESC'|@translate}</small>
        </li>
	<li>
            <label>{'UNIT'|@translate} : </label>
            <select name="fc_unit">
                    {html_options options=$AVAILABLE_UNITS selected=$fc.unit}
            </select>
            <br/><small>{'UNIT_DESC'|@translate}</small>
        </li>
	<li>
            <label>{'LANGUAGE'|@translate} : </label>
            <select name="fc_lang">
                    {html_options options=$AVAILABLE_LANGUAGES selected=$fc.lang}
            </select>
            <br/><small>{'LANGUAGE_DESC'|@translate}</small>
        </li>
        <li>
            <label>{'HEADER'|@translate} : </label>
            <input type="text" value="{$fc.link}" name="fc_link" size="30" placeholder="Forecast" required=""/>
            <br/><small>{'HEADER_DESC'|@translate}</small>
        </li>
        <li>
            <label>{'SHOW_MODE'|@translate} : </label>
            <label><input type="radio" name="fc_mode" value="true" {if $fc.mode}checked="checked"{/if}/> {'Textual'|@translate}</label>
            <label><input type="radio" name="fc_mode" value="false" {if not $fc.mode}checked="checked"{/if}/> {'Graphical'|@translate}</label>
            <br/><small>{'SHOW_MODE_DESC'|@translate}</small>
        </li>
        <li>
            <label>{'SHOW_LINK'|@translate} : </label>
            <label><input type="radio" name="fc_showlink" value="true" {if $fc.show}checked="checked"{/if}/> {'Yes'|@translate}</label>
            <label><input type="radio" name="fc_showlink" value="false" {if not $fc.show}checked="checked"{/if}/> {'No'|@translate}</label>
            <br/><small>{'SHOW_LINK_DESC'|@translate}</small>
        </li>
    </ul>
</fieldset>

<fieldset>
   <legend>{'API DarkSky.net'|@translate}</legend>
    <ul>
        <li>
            <label>{'API_KEY'|@translate} : </label>
            <input type="text" value="{$fc.api_key}" name="fc_api_key" size="60" placeholder="DarkSky.net API KEY"/>
            <br/><small>{'API_KEY_DESC'|@translate} <a target="_blanck" href="https://github.com/xbgmsharp/nodejs-forecast">nodejs-forecast</a></small>
        </li>
    </ul>
</fieldset>

<p>
 <input class="submit" type="submit" name="forecast_config_submit" value="{'Submit'|@translate}">
</p>

</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.js"></script>
<link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/themes/ui-lightness/jquery-ui.css" rel="stylesheet" type="text/css"/>
<script src="{$FORECAST_PATH}admin/colorpicker/jquery.colorpicker.js"></script>
<link href="{$FORECAST_PATH}admin/colorpicker/jquery.colorpicker.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript">
{literal}
$(function() {

  $('#fc_color_bkg').colorpicker({ parts: 'inline', color: '{/literal}{$fc.color_bkg}{literal}' });
  $('#fc_color_txt').colorpicker({ parts: 'inline', color: '{/literal}{$fc.color_bkg}{literal}' });

});
{/literal}
</script>
