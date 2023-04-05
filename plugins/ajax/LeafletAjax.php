<?php

namespace oriole\map\leaflet\plugins\ajax;

use oriole\map\leaflet\Plugin;

/**
 * Class LeafletAjax
 * @package oriole\map\leaflet\plugins\ajax
 */
class LeafletAjax extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:ajax';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        LeafletAjaxAsset::register($view);
        return $this;
    }
}
