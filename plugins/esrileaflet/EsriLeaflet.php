<?php

namespace oriole\map\leaflet\plugins\esrileaflet;

use oriole\map\leaflet\Plugin;

/**
 * Class EsriLeaflet
 * @package oriole\map\leaflet\plugins\esrileaflet
 */
class EsriLeaflet extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:esrileaflet';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        EsriLeafletAsset::register($view);
        return $this;
    }
}
