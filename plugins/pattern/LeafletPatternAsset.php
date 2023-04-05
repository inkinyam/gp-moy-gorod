<?php

namespace oriole\map\leaflet\plugins\pattern;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class LeafletPatternAsset
 * @package oriole\map\leaflet\plugins\pattern
 */
class LeafletPatternAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@bower/leaflet.pattern/dist';
    /**
     * @var array
     */
    public $js = [
        'leaflet.pattern.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}