<?php

namespace oriole\map\leaflet\plugins\fillpattern;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class LeafletFillPatternAsset
 * @package oriole\map\leaflet\plugins\fillpattern
 */
class LeafletFillPatternAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/assets';
    /**
     * @var array
     */
    public $js = [
        'js/leaflet-polygon.fillPattern.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}