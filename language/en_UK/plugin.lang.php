<?php
$lang['PLG_FORECAST'] = "This plugin display forecast condition from the location and the date of the item.";
$lang['DISPLAY'] = "Display configuration";
$lang['SHOWLOCATION'] = "Display location map";
$lang['UNIT'] = 'Unit';
$lang['UNIT_DESC'] = 'Select the relevant units. Default is auto. <br/>The following settings are possible:<ul class="units" style="padding-left: 30px;">
<li>us: The U.S Units.</li>
<li>si: The SI units. In particular, properties now have the following units:<br/>
       <ul class="units2" style="padding-left: 30px;">
        <li class="units2">summary: Any summaries containing temperature or snow accumulation units will have their values in degrees Celsius or in centimeters (respectively).</li>
        <li>nearestStormDistance: Kilometers.</li>
        <li>precipIntensity: Millimeters per hour.</li>
        <li>precipIntensityMax: Millimeters per hour.</li>
        <li>precipAccumulation: Centimeters.</li>
        <li>temperature: Degrees Celsius.</li>
        <li>temperatureMin: Degrees Celsius.</li>
        <li>temperatureMax: Degrees Celsius.</li>
        <li>apparentTemperature: Degrees Celsius.</li>
        <li>dewPoint: Degrees Celsius.</li>
        <li>windSpeed: Meters per second.</li>
        <li>pressure: Hectopascals (which are, conveniently, equivalent to the default millibars).</li>
        <li>visibility: Kilometers.</li>
       </ul>
  <li>ca: Identical to si, except that windSpeed is in kilometers per hour.</li>
  <li>uk: Identical to si, except that windSpeed is in miles per hour, as in the US. (This option is provided because adoption of SI in the UK has been inconsistent.)</li>
  <li>auto: Selects the relevant units automatically, based on geographic location.</li>
</ul>';
$lang['LANGUAGE'] = 'Language';
$lang['LANGUAGE_DESC'] = 'Return text summaries in the desired language. Please be advised that units in the summary will be set according to the units option, above, so be sure to set both options as needed.';
$lang['SHOWLOCATION_DESC'] = "Show a map on right panel on picture page.";
$lang['ADD_BEFORE'] = "Add location before";
$lang['ADD_BEFORE_DESC'] = "Where to display the location information.";
$lang['HEIGHT'] = "Height";
$lang['HEIGHT_DESC'] = "in px";
$lang['HEADER'] = "Name of the forecast header";
$lang['HEADER_DESC'] = "Type the name to display on top of the Forecast.";
$lang['SHOW_LINK'] = "Display 'View on Forecast'";
$lang['SHOW_LINK_DESC'] = "Add a link after the forecast to view it on Forecast.io.";
$lang['API_KEY'] = "API KEY";
$lang['API_KEY_DESC'] = "Optional, input your Forecast.io API KEY otherwise use the proxy.";
