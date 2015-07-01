{html_head}
<link href="{$FORECAST_PATH}lib/forecast.css" rel="stylesheet">
<script src="{$FORECAST_PATH}lib/skycons.js"></script>
{/html_head}

{footer_script}
{literal}
// BEGIN skycons / Animate weather icons
  var skycons = new Skycons({"color": "black"});
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
    $(document).on('click', '.inner', function () {
	$( "div.current_container" ).toggleClass( "show_more" );
	var el = $("span.more_button");
  	el.text(el.text() === "-" ? "+" : "-");
    });
});

{/literal}
{/footer_script}
