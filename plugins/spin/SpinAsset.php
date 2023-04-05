<?php

namespace oriole\map\leaflet\plugins\spin;

use yii\web\AssetBundle;

/**
 * Class SpinAsset
 * @package oriole\map\leaflet\plugins\spin
 */
class SpinAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@npm/spin.js';
    /**
     * @var array
     */
    public $js = [
        'spin.min.js',
    ];
}