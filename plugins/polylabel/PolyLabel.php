<?php

namespace oriole\map\leaflet\plugins\polylabel;

use oriole\map\leaflet\Plugin;

/**
 * Class PolyLabel
 * @package oriole\map\leaflet\plugins\polylabel
 */
class PolyLabel extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:polylabel';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        PolyLabelAsset::register($view);
        return $this;
    }
}
