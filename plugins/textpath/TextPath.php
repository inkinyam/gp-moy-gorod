<?php

namespace oriole\map\leaflet\plugins\textpath;

use oriole\map\leaflet\Plugin;

/**
 * Class TextPath
 * @package oriole\map\leaflet\plugins\textpath
 */
class TextPath extends Plugin
{
    /**
     * @inheritdoc
     */
    public function getPluginName()
    {
        return 'plugin:textpath';
    }

    /**
     * @inheritdoc
     */
    public function registerAssetBundle($view)
    {
        TextPathAsset::register($view);
        return $this;
    }
}
