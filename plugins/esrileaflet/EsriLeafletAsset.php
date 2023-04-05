<?php

namespace oriole\map\leaflet\plugins\esrileaflet;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class EsriLeafletAsset
 * @package oriole\map\leaflet\plugins\esrileaflet
 */
class EsriLeafletAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/assets/';
    /**
     * @var array
     */
    public $js = [
        'js/esri-leaflet.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}