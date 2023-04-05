<?php

namespace oriole\map\leaflet\plugins\markercluster;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class MarkerClusterAsset
 * @package oriole\map\leaflet\plugins\markercluster
 */
class MarkerClusterAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@npm/leaflet.markercluster/dist';
    /**
     * @var array
     */
    public $js = [
        'leaflet.markercluster.js',
    ];
    /**
     * @var array
     */
    public $css = [
        'MarkerCluster.css',
        'MarkerCluster.Default.css',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}