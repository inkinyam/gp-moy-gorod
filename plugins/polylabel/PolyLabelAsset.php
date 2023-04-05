<?php

namespace oriole\map\leaflet\plugins\polylabel;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class PolyLabelAsset
 * @package oriole\map\leaflet\plugins\polylabel
 */
class PolyLabelAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/assets';
    /**
     * @var array
     */
    public $js = [
        'js/polylabel.min.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        TinyQueueAsset::class,
        LeafLetAsset::class,
    ];
}