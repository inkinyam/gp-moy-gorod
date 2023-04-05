<?php

namespace oriole\map\leaflet\plugins\markercluster;

use oriole\map\leaflet\Plugin;

/**
 * Class MarkerCluster
 * @package oriole\map\leaflet\plugins\markercluster
 */
class MarkerCluster extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:markercluster';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        MarkerClusterAsset::register($view);
        return $this;
    }
}
