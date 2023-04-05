<?php

namespace oriole\map\leaflet\plugins\spin;

use oriole\map\leaflet\LeafLetAsset;
use oriole\map\leaflet\plugins\ajax\LeafletAjaxAsset;
use yii\web\AssetBundle;

/**
 * Class LeafletSpinAsset
 * @package oriole\map\leaflet\plugins\spin
 */
class LeafletSpinAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@npm/leaflet-spin';
    /**
     * @var array
     */
    public $js = [
        'leaflet.spin.min.js',
    ];
    /**
     * @var array
     */
    public $depends = [
        LeafLetAsset::class,
        LeafletAjaxAsset::class,
        SpinAsset::class,
    ];
}