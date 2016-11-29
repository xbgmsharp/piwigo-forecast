{html_head}
<style>
  {literal}
    .osm_layout {
      text-align: left;
      border: 2px solid rgb(221, 221, 221);
      padding: 1em;
      margin: 1em;
    }
  {/literal}
</style>
{/html_head}

Create tags from the weather condition base on the GPS (latitude, longitude) and time metadata information. 
<br/><br/>
Refer to the <a href="https://github.com/xbgmsharp/piwigo-forecast/wiki" target="_blank">plugin documentation</a> for additional information. Create an <a href="https://github.com/xbgmsharp/piwigo-forecast/issues" target="_blank">issue</a> for support, or feedback, or feature request.

<div class="osm_layout">
  <legend>{'Statistics'|@translate}</legend>
  <ul>
    <li class="update_summary_new">{$NB_GEOTAGGED} geotagged items in your gallery</li>
  </ul>
</div>

{if isset($metadata_result)}
<div class="osm_layout">
  <legend>Synchronization results</legend>
  <ul>
	<li>{$metadata_result.NB_ELEMENTS_DONE} {'tags updated in the database'|@translate}</li>
	<li>{$metadata_result.NB_ELEMENTS_CANDIDATES} {'photos candidates for tags synchronization'|@translate}</li>
	<li>{$metadata_result.NB_WARNINGS} {'warnings during synchronization'|@translate}</li>
	<li>{$metadata_result.NB_ERRORS} {'errors during synchronization'|@translate}</li>
  </ul>

{if not empty($sync_errors)}
  <h3>{'Error list'|@translate}</h3>
  <div class="errors">
    <ul>
      {foreach from=$sync_errors item=error}
      <li>{$error}</li>
      {/foreach}
    </ul>
  </div>
{/if}

{if not empty($sync_warnings)}
  <h3>{'Warnings'|@translate}</h3>
  <div class="warnings">
    <ul>
      {foreach from=$sync_warnings item=warning}
      <li>{$warning}</li>
      {/foreach}
    </ul>
  </div>
{/if}

{if not empty($sync_infos)}
  <h3>{'Detailed informations'|@translate}</h3>
  <div class="infos">
    <ul>
      {foreach from=$sync_infos item=info}
      <li>{$info}</li>
      {/foreach}
    </ul>
  </div>
{/if}

</div>
{/if}

<form action="" method="post" id="update">

  <fieldset id="tags">
	<legend>{'Manage tags'|@translate}</legend>
	<ul>
		<li>
			<label>
				{'Name of the tag group'|@translate} :
				<input type="text" name="fc_taggroup" value="{$sync_options.fc_tag_group}" placeholder="weather" required="" size="30"/>
			</label>
			<br/><small>Tag can be one of the following values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night</small>
		</li>
	</ul>
   </fieldset>

  <fieldset id="syncSimulation">
    <legend>{'Simulation'|@translate}</legend>
    <ul>
      <li><label><input type="checkbox" name="simulate" value="1" checked="checked" /> {'only perform a simulation (no change in database will be made)'|@translate}</label></li>
    </ul>
  </fieldset>

  <fieldset id="catSubset">
    <legend>{'reduce to single existing albums'|@translate}</legend>
    <ul>
    <li>
    <select class="categoryList" name="cat_id" size="10">
    	{html_options options=$categories selected=$categories_selected}
    </select>
    </li>

    <li><label><input type="checkbox" name="subcats_included" value="1" {$SUBCATS_INCLUDED_CHECKED} /> {'Search in sub-albums'|@translate}</label></li>
    </ul>
  </fieldset>

  <p>
    <input type="submit" value="{'Submit'|@translate}" name="forecast_tag_submit">
  </p>
</form>
