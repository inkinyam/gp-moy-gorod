<?php

namespace oriole\map\leaflet\plugins\pattern;

use oriole\map\leaflet\Plugin;

/**
 * Class LeafletPattern
 * @package oriole\map\leaflet\plugins\pattern
 */
class LeafletPattern extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:pattern';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        LeafletPatternAsset::register($view);
        return $this;
    }
}
