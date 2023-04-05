<?php

namespace oriole\map\leaflet\plugins\textpath;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class TextPathAsset
 * @package oriole\map\leaflet\plugins\textpath
 */
class TextPathAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = __DIR__ . '/assets';
    /**
     * @var array
     */
    public $js = [
        'js/leaflet.textpath.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}