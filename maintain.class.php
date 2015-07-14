<?php
/***********************************************
* File      :   maintain.class.php
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

class forecast_maintain extends PluginMaintain {

  private $default_config = array(
    'add_before' => 'Average',
    'color_bkg' => '#FFF',
    'color_txt' => '#222',
    'link' => 'Overcast',
    'show' => true,
    'api_key' => '',
    'unit' => 'auto',
    'lang' => 'en',
    'mode' => false
  );

  function install($plugin_version, &$errors=array())
  {
    global $conf;

    // Configuration
    if (!isset($conf['forecast_conf']) || empty($conf['forecast_conf']))
    {
      $this->default_config['last_clean'] = time();
      conf_update_param('forecast_conf', $this->default_config, true);

      $q = 'UPDATE '.CONFIG_TABLE.' SET `comment` = "Configuration settings for piwigo-forecast plugin" WHERE `param` = "forecast_conf";';
      pwg_query( $q );
    }
    else
    {
      $current_conf = safe_unserialize($conf['forecast_conf']);
      conf_update_param('forecast_conf', array_merge($this->default_config, $current_conf), true);
    }
    // Create MySQL View
    $q = 'DROP VIEW IF EXISTS `forecast`;';
    pwg_query( $q );
    $q = 'CREATE VIEW forecast AS SELECT `id`, `latitude`, `longitude`, UNIX_TIMESTAMP( IFNULL(`date_creation`, `date_available`) ) as `date` FROM '.IMAGES_TABLE.' WHERE `latitude` IS NOT NULL AND `longitude` is NOT NULL;';
    pwg_query( $q );
  }

  function activate($plugin_version, &$errors=array()) {
  }

  function update($old_version, $new_version, &$errors=array())
  {
   $this->install($new_version, $errors);
  }

  function deactivate()
  {
  }

  function uninstall()
  {
    global $conf;

    conf_delete_param('forecast_conf');
    $q = 'DROP VIEW forecast;';
    pwg_query( $q );
  }

}

?>
