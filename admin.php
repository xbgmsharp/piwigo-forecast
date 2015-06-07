<?php
/***********************************************
* File      :   admin.php
* Project   :   piwigo-forecast
* Descr     :   Install / Uninstall method
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

if (!defined('PHPWG_ROOT_PATH')) die('Hacking attempt!');

// Check access and exit when user status is not ok
check_status(ACCESS_ADMINISTRATOR);

// Setup plugin Language
load_language('plugin.lang', PHPWG_PLUGINS_PATH . basename(dirname(__FILE__)).'/');

// Update conf if submitted in admin site
if (isset($_POST['forecast_submit']))
{
   if (isset($_POST['cdn_enabled']) and $_POST['cdn_enabled'] == "true" and (empty($_POST['root']) || empty($_POST['host'])))
   {
       array_push($page['errors'], l10n('CDN enable but no CDN domain setup or Site Root define'));
   }
   else
   {

   /* handle file ext */
   $filetypes_arr = array_fill_keys(array_intersect_key($conf['file_ext'], array_unique(array_map('strtolower', $conf['file_ext']))), false);
   isset($_POST['filetypes']) ? $_POST['filetypes'] = array_merge($filetypes_arr, array_map( $func_arr_map, array_flip($_POST['filetypes']))) : $_POST['filetypes'] = $filetypes_arr;
   isset($_POST['filetypes_2']) ? $_POST['filetypes_2'] = array_merge($filetypes_arr, array_map( $func_arr_map, array_flip($_POST['filetypes_2']))) : $_POST['filetypes_2'] = $filetypes_arr;
   isset($_POST['filetypes_3']) ? $_POST['filetypes_3'] = array_merge($filetypes_arr, array_map( $func_arr_map, array_flip($_POST['filetypes_3']))) : $_POST['filetypes_3'] = $filetypes_arr;
   isset($_POST['filetypes_4']) ? $_POST['filetypes_4'] = array_merge($filetypes_arr, array_map( $func_arr_map, array_flip($_POST['filetypes_4']))) : $_POST['filetypes_4'] = $filetypes_arr;
   isset($_POST['filetypes_5']) ? $_POST['filetypes_5'] = array_merge($filetypes_arr, array_map( $func_arr_map, array_flip($_POST['filetypes_5']))) : $_POST['filetypes_5'] = $filetypes_arr;

   $conf['forecast_conf'] = array(
    'cdn_enabled'  => isset($_POST['cdn_enabled']),
    'cdn_extra_enabled' => isset($_POST['cdn_extra_enabled']),
    );

      // Update config to DB
      conf_update_param('forecast_conf', serialize($conf['forecast_conf']));

      // the prefilter changes, we must delete compiled templates
      $template->delete_compiled_templates();

      // Notify user all is fine
      array_push($page['infos'], l10n('Your configuration settings are saved'));
    }
}

$template->set_filename('plugin_admin_content', dirname(__FILE__).'/admin.tpl');

// send value to template
$template->assign($conf['forecast_conf']);
$template->assign_var_from_handle('ADMIN_CONTENT', 'plugin_admin_content');
?>
