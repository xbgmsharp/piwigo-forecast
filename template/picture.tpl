{html_head}
<link href="{$FORECAST_PATH}lib/forecast.css" rel="stylesheet">
<script src="{$FORECAST_PATH}lib/skycons.js"></script>
<style>
#forecast-info .fc-section {
    color: {$FORECAST_COLOR['txt']} !important;
    background: {$FORECAST_COLOR['bkg']} !important;
}
#forecast-info .fc-section .fc-h2 {
    color: {$FORECAST_COLOR['txt']} !important;
}
</style>
{/html_head}

{footer_script}
{literal}
// BEGIN skycons / Animate weather icons
  var skycons = new Skycons({"color": "{/literal}{$FORECAST_COLOR['txt']}{literal}" });
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  //skycons.add("icon_current", Skycons.PARTLY_CLOUDY_DAY);

  // ...or by the canvas DOM element itself.
  //skycons.add(document.getElementById("icon2"), Skycons.RAIN);

  // if you're using the Forecast API, you can also supply
  // strings: "partly-cloudy-day" or "rain".
  skycons.add("icon_current", "{/literal}{$FORECAST_DATA->icon}{literal}");

  // start animation!
  skycons.play();

  // you can also halt animation with skycons.pause()

  // want to change the icon? no problem:
  //skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

  // want to remove one altogether? no problem:
  //skycons.remove("icon2");
// END skycons

// Jquery helper
$(document).ready(function () {
    $(document).on('click', '.fc-inner', function () {
	$( "div.fc-current_container" ).toggleClass( "fc-show_more" );
	var el = $("span.fc-more_button");
  	el.text(el.text() === "-" ? "+" : "-");
    });
});

{/literal}
{/footer_script}
