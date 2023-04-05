<?php

namespace oriole\map\leaflet\plugins\draw;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class LeafletDrawBaseAsset
 * @package oriole\map\leaflet\plugins\draw
 */
class LeafletDrawBaseAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@npm/leaflet-draw/dist';
    /**
     * @var array
     */
    public $js = [
        'leaflet.draw.js'
    ];
    /**
     * @var array
     */
    public $css = [
        'leaflet.draw.css',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}