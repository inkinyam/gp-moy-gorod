<?php

namespace oriole\map\leaflet\plugins\turf;

use oriole\map\leaflet\Plugin;

/**
 * Class Turf
 * @package oriole\map\leaflet\plugins\turf
 */
class Turf extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:turf';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        TurfAsset::register($view);
        return $this;
    }
}
