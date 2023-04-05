<?php

namespace oriole\map\leaflet\plugins\draw;

use yii\web\AssetBundle;

/**
 * Class LeafletDrawAsset
 * @package oriole\map\leaflet\plugins\draw
 */
class LeafletDrawAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/src/';
    /**
     * @var array
     */
    public $css = [
        'css/leaflet.draw.custom.css',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafletDrawBaseAsset::class,
    ];
}