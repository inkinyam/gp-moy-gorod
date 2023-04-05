<?php

namespace oriole\map\leaflet\plugins\spin;

use oriole\map\leaflet\Plugin;

/**
 * Class LeafletSpin
 * @package oriole\map\leaflet\plugins\spin
 */
class LeafletSpin extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:spin';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        LeafletSpinAsset::register($view);
        return $this;
    }
}
