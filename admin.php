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

// Available options
$available_add_before = array(
    'Author'    => l10n('Author'),
    'datecreate'=> l10n('Created on'),
    'datepost'  => l10n('Posted on'),
    'Dimensions'=> l10n('Dimensions'),
    'File'      => l10n('File'),
    'Filesize'  => l10n('Filesize'),
    'Tags'      => l10n('Tags'),
    'Categories'=> l10n('Albums'),
    'Visits'    => l10n('Visits'),
    'Average'   => l10n('Rating score'),
    'rating'    => l10n('Rate this photo'),
    'Privacy'   => l10n('Who can see this photo?'),
);

// Available Units, https://developer.forecast.io/docs/v2
$available_units = array (
   'us' => 'U.S. units',
   'si' => 'International System of units',
   'ca' => 'Canada units',
   'uk' => 'U.K. units',
   'auto' => 'Automatic units',
);

// Available Languages, https://developer.forecast.io/docs/v2
$available_languages = array (
    'ar' => 'Arabic',
    'bs' => 'Bosnian',
    'de' => 'German',
    'en' => 'English',
    'es' => 'Spanish',
    'fr' => 'French',
    'it' => 'Italian',
    'nl' => 'Dutch',
    'pl' => 'Polish',
    'pt' => 'Portuguese',
    'ru' => 'Russian',
    'sv' => 'Swedish',
    'tet' => 'Tetum',
    'tr' => 'Turkish',
    'x-pig-latin' => 'Igpay Atinlay',
    'zh' => 'Chinese',
);

// Update conf if submitted in admin site
if (isset($_POST['forecast_submit']))
{
     $conf['forecast_conf'] = array(
       'add_before' => $_POST['fc_add_before'],
       'height' => $_POST['fc_height'],
       'link' => $_POST['fc_link'],
       'show' => get_boolean($_POST['fc_showlink']),
       'api_key' => $_POST['fc_api_key'],
       'unit' => $_POST['fc_unit'],
       'lang' => $_POST['fc_lang'],
      );

      // Update config to DB
      conf_update_param('forecast_conf', serialize($conf['forecast_conf']));

      // the prefilter changes, we must delete compiled templates
      $template->delete_compiled_templates();

      // Notify user all is fine
      array_push($page['infos'], l10n('Your configuration settings are saved'));
}

$template->set_filename('plugin_admin_content', dirname(__FILE__).'/admin.tpl');
// send value to template
$template->assign('fc', $conf['forecast_conf']);
$template->assign(
    array(
        'AVAILABLE_ADD_BEFORE' => $available_add_before,
        'AVAILABLE_UNITS'      => $available_units,
        'AVAILABLE_LANGUAGES'  => $available_languages,
    )
);
$template->assign_var_from_handle('ADMIN_CONTENT', 'plugin_admin_content');
?>
