<?php

namespace oriole\map\leaflet\plugins\polylabel;

use yii\web\AssetBundle;

/**
 * Class TinyQueueAsset
 * @package oriole\map\leaflet\plugins\polylabel
 */
class TinyQueueAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@npm/tinyqueue';
    /**
     * @var array
     */
    public $js = [
        'tinyqueue.min.js',
    ];
}