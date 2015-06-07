<?php
/*
Plugin Name: Forecast
Version: 2.7.a
Description: Forecast.io integration for Piwigo
Plugin URI: http://piwigo.org/ext/extension_view.php?eid=795
Author: xbmgsharp
Author URI: https://github.com/xbgmsharp/piwigo-forecast
*/

// Chech whether we are indeed included by Piwigo.
if (!defined('PHPWG_ROOT_PATH')) die('Hacking attempt!');

// Define the path to our plugin.
define('FORECAST_PATH', PHPWG_PLUGINS_PATH . basename(dirname(__FILE__)).'/');

global $conf;

// Prepare configuration
$conf['forecast_conf'] = safe_unserialize($conf['forecast_conf']);

// Add an entry to the 'Plugins' menu.
add_event_handler('get_admin_plugin_menu_links', 'forecast_admin_menu');

function forecast_admin_menu($menu) {
	$admin_url = get_admin_plugin_menu_link(dirname(__FILE__).'/admin.php');
	array_push($menu, array(
		'NAME'  => 'Forecast',
		'URL'   => get_admin_plugin_menu_link(dirname(__FILE__)).'/admin.php'
		)
	);
	return $menu;
}


// Add event handler if Forecast enable
if (!empty($conf['forecast_conf']['enabled']) and !defined('IN_ADMIN') )
{
	include_once(dirname(__FILE__).'/picture.inc.php');
}
// FOR TEST - REMOVE BEFORE PROD
include_once(dirname(__FILE__).'/picture.inc.php');

?>
