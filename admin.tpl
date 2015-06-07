<div class="titlePage">
 <h2>{'Forecast'|@translate}</h2>
</div>

{'PLG_FORECAST'|@translate}
<br/><br/>
Refer to the <a href="https://github.com/xbgmsharp/piwigo-forecast/wiki" target="_blanck">plugin documentation</a> for additional information. Create an <a href="https://github.com/xbgmsharp/piwigo-forecast/issues" target="_blanck">issue</a> for support, or feedback, or feature request.

<form method="post" action="" class="properties" id="forecast_config">
<fieldset>
   <legend>{'Configuration'|@translate}</legend>
    <ul>
<!--
      <li>
        <label>{'FCIO_ENABLED'|@translate} : </label>
        <label><input type="checkbox" name="cdn_enabled" id="cdn_enabled" value="true" {if $cdn_enabled} checked="checked"{/if} /></label>
        <br/><small>{'FCIO_ENABLED_DESC'|@translate}</small>
      </li>
      <li>
        <label>{'FCIO_APIKEY'|@translate} : </label>
        <label><input type="text" name="mediainfo" value="{$mediainfo}" class="large" /></label>
        <br/><small>{'FCIO_APIKEY_DESC'|@translate}</small>
      </li>
-->
    </ul>
</fieldset>

<p>
 <input class="submit" type="submit" name="forecast_submit" value="{'Submit'|@translate}">
</p>

</form>
