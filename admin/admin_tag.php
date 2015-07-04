<?php
/***********************************************
* File      :   admin_tag.php
* Project   :   piwigo-forecast
* Descr     :   Create tags from weather condition
*
* Created   :   06.07.2015
*
* Copyright 2015 <xbgmsharp@gmail.com>
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

// Check whether we are indeed included by Piwigo.
if (!defined('PHPWG_ROOT_PATH')) die('Hacking attempt!');

// Check access and exit when user status is not ok
check_status(ACCESS_ADMINISTRATOR);

// Setup plugin Language
load_language('plugin.lang', FORECAST_PATH);

// Fetch the template.
global $template, $conf, $lang;

// Generate default value
$sync_options = array(
	'overwrite'		=> true,
	'simulate'		=> true,
	'cat_id'		=> 0,
	'subcats_included'	=> true,
	'fc_tag_group'		=> 'weather',
);

if ( isset($_POST['forecast_tag_submit']) )
{
	// Override default value from the form
	$sync_options = array(
		'overwrite' => isset($_POST['overwrite']),
		'simulate' => isset($_POST['simulate']),
		'cat_id' => isset($_POST['cat_id']) ? (int)$_POST['cat_id'] : 0,
		'subcats_included' => isset($_POST['subcats_included']),
		'fc_tag_group'	=> $_POST['fc_taggroup'],
	);

	// Define files which lat and long avaiable
	define('SQL_EXIF', "`latitude` IS NOT NULL AND `longitude` is NOT NULL");
	if ( $sync_options['cat_id']!=0 )
	{
		$query=' SELECT id FROM '.CATEGORIES_TABLE.' WHERE ';

		if ( $sync_options['subcats_included'])
			$query .= 'uppercats REGEXP \'(^|,)'.$sync_options['cat_id'].'(,|$)\'';
		else
			$query .= 'id='.$sync_options['cat_id'];
			$cat_ids = array_from_query($query, 'id');

		$query='SELECT `id`, `name`, `latitude`, `longitude`, UNIX_TIMESTAMP( IFNULL(`date_creation`, `date_available`) ) as `date` FROM '.IMAGES_TABLE.' INNER JOIN '.IMAGE_CATEGORY_TABLE.' ON id=image_id
			WHERE '. SQL_EXIF .' AND category_id IN ('.implode(',', $cat_ids).')
			GROUP BY id';
	}
	else
	{
		$query='SELECT `id`, `name`, `latitude`, `longitude`, UNIX_TIMESTAMP( IFNULL(`date_creation`, `date_available`) ) as `date` FROM '.IMAGES_TABLE.' WHERE '. SQL_EXIF;
	}

	$images = hash_from_query( $query, 'id');
	$datas = array();
	$errors = array();
	$warnings = array();
	$infos = array();
	//  Init Forecast.io lib
	include(FORECAST_PATH .'lib/forecast.io.php');
	foreach ($images as $image)
	{
		// Fech reverse location from API
		$fc_api_key = isset($conf['forecast_conf']['api_key']) ? $conf['forecast_conf']['api_key'] : '';
		// Can be set to 'us', 'si', 'ca', 'uk' or 'auto' (see forecast.io API); default is auto
		// Can be set to 'en', 'de', 'pl', 'es', 'fr', 'it', 'tet' or 'x-pig-latin' (see forecast.io API); default is 'en'
		$unit = isset($conf['forecast_conf']['unit']) ? $conf['forecast_conf']['unit'] : 'auto';
		$lang = isset($conf['forecast_conf']['lang']) ? $conf['forecast_conf']['lang'] : 'en';
		/* Do we have a Forecast.io API key */
		if (strlen($fc_api_key) != 0)
		{
			// Make a request to Forecast.io using the user supply API, proxy set to false
			$forecast = new ForecastIO($fc_api_key, $unit, $lang, false);
		}
		else // We do NOT have a Key
		{
			/**
			 * Make a request to https://forecast-xbgmsharp.rhcloud.com
			 * to non disclose the Forecast.io API key, proxy set to true
			 * Source code at https://github.com/xbgmsharp/nodejs-forecast
			 **/
			$forecast = new ForecastIO($fc_api_key, $unit, $lang, true);
		}
		$condition = $forecast->getHistoricalConditions($image['latitude'], $image['longitude'], $image['date']);

		if (!isset($condition) or $condition === 'false')
			$errors[] = "Error fetching weather condition data for ". $image['name'];
		//print_r($condition);

		// If reponse include icon
		if (isset($condition) and isset($condition->icon) and !empty($condition->icon))
		{
			if (!$sync_options['simulate'])
			{
				$id = tag_id_from_tag_name($sync_options['fc_tag_group'].":".$condition->icon);
				add_tags([$id], [$image['id']]);
			}
			$infos[] = "Set tag '". $condition->icon ."' for ". $image['name'];
			$datas[] = $image['id'];
		}
		//die("Done one image");
	} // Images loop

	// Send sync result to template
	$template->assign('sync_errors', $errors );
	$template->assign('sync_warnings', $warnings );
	$template->assign('sync_infos', $infos );

	// Send result to templates
	$template->assign(
		'metadata_result',
		array(
			'NB_ELEMENTS_DONE'		=> count($datas),
			'NB_ELEMENTS_CANDIDATES'	=> count($images),
			'NB_ERRORS'			=> count($errors),
			'NB_WARNINGS'			=> count($warnings),
		)
	);
}

// Check if tag_groups is present and active
$query="SELECT COUNT(*) FROM ".PLUGINS_TABLE." WHERE `id`='tag_groups' AND `state`='active';";
list($tag_groups) = pwg_db_fetch_array( pwg_query($query) );
if ($tag_groups != 1) {
	$template->assign('plg_warnings', ["To use this feature you need the <a href='http://piwigo.org/ext/extension_view.php?eid=781' target='_blank'>tag_groups plugin</a> to be activate"] );
}

$query = 'SELECT COUNT(*) FROM '.IMAGES_TABLE.' WHERE `latitude` IS NOT NULL and `longitude` IS NOT NULL ';
list($nb_geotagged) = pwg_db_fetch_array( pwg_query($query) );

$query = 'SELECT id, CONCAT(name, IF(dir IS NULL, " (V)", "") ) AS name, uppercats, global_rank  FROM '.CATEGORIES_TABLE;
display_select_cat_wrapper($query,
                           array( $sync_options['cat_id'] ),
                           'categories',
                           false);

// Send value to templates
$template->assign(
	array(
		'SUBCATS_INCLUDED_CHECKED' 	=> $sync_options['subcats_included'] ? 'checked="checked"' : '',
		'NB_GEOTAGGED' 			=> $nb_geotagged,
	)
);

?>
