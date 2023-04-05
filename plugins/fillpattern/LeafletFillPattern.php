<?php

namespace oriole\map\leaflet\plugins\fillpattern;

use oriole\map\leaflet\Plugin;

/**
 * Class LeafletFillPattern
 * @package oriole\map\leaflet\plugins\fillpattern
 */
class LeafletFillPattern extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:fillpattern';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        LeafletFillPatternAsset::register($view);
        return $this;
    }
}
