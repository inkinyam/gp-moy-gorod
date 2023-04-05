<?php

namespace oriole\map\leaflet\plugins\turf;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class TurfAsset
 * @package oriole\map\leaflet\plugins\turf
 */
class TurfAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/assets/';
    /**
     * @var array
     */
    public $js = [
        'js/turf.min.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}