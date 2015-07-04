<?php
/*
Plugin Name: Forecast
Version: 2.7.b
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

// If admin do the init
if (defined('IN_ADMIN')) {
	include_once(dirname(__FILE__).'/admin/admin_boot.php');
}

// Add event handler if not in admin
if (!defined('IN_ADMIN') )
{
	include_once(dirname(__FILE__).'/picture.inc.php');
}

?>
