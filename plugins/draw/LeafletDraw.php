<?php

namespace oriole\map\leaflet\plugins\draw;

use oriole\map\leaflet\Plugin;

/**
 * Class LeafletDraw
 * @package oriole\map\leaflet\plugins\draw
 */
class LeafletDraw extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:draw';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        LeafletDrawAsset::register($view);
        return $this;
    }
}
