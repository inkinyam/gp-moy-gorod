<?php

namespace oriole\map\leaflet\plugins\ajax;

use oriole\map\leaflet\LeafLetAsset;
use yii\web\AssetBundle;

/**
 * Class LeafletAjaxAsset
 * @package oriole\map\leaflet\plugins\ajax
 */
class LeafletAjaxAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@bower/leaflet-ajax/dist';
    /**
     * @var array
     */
    public $js = [
        'leaflet.ajax.min.js'
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
    ];
}