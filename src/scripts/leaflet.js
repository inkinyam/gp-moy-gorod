import * as L from 'leaflet';

import pestr from '../../new.geojson';


class LeafletMaps extends L.Class {
  constructor(id, options) {
    super();
    this.id = id;
    this.container = document.querySelector(this.id);
    this.options = options;
    this.renderMap();
  }
  
  renderMap() {
    let baseLayerOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 13});
    let baseLayerCRT = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'); 
    
    this.baseMaps = {
      "OSM": baseLayerOSM,
      "BMap": baseLayerCRT
    };

        
    let littleton = L.marker([55.842483, 49.081005]).bindPopup('Вокзал Казань2');
    let denver    = L.marker([55.832231, 49.145599]).bindPopup('Лента');
    let aurora    = L.marker([55.830808, 49.102817]).bindPopup('Бассейн');
    let golden    = L.marker([55.815308, 49.132735]).bindPopup('Тусовка');

    let cities    = L.layerGroup([littleton, denver, aurora, golden]);

    var crownHill = L.marker([55.828896, 49.107803]).bindPopup('Парк Победы'),
        rubyHill = L.marker([55.813232, 49.110260]).bindPopup('Парк Казань');
    
    var parks = L.layerGroup([crownHill, rubyHill]);


    this.overlays = {'важные места': cities,
                      'парки': parks};

    this.map = new L.map(this.container, {
      layers: [
               L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'),
               L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'),
              ], 
      zoom: 12,
      attributionControl : false,
      zoomControl: true,
      keyboard: false,
      scrollWheelZoom: false,
      center: [55.796127, 49.106414]});
      
      L.control.layers(this.baseMaps, this.overlays).addTo(this.map);
      L.geoJSON(pestr).addTo(this.map);
  }
}

export default LeafletMaps;