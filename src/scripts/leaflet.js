import * as L from 'leaflet';
        
let littleton = L.marker([55.842483, 49.081005]).bindPopup('Вокзал Казань2');
let denver    = L.marker([55.832231, 49.145599]).bindPopup('Лента');
let aurora    = L.marker([55.830808, 49.102817]).bindPopup('Бассейн');
let golden    = L.marker([55.815308, 49.132735]).bindPopup('Тусовка');
let crownHill = L.marker([55.828896, 49.107803]).bindPopup('Парк Победы');
let rubyHill = L.marker([55.813232, 49.110260]).bindPopup('Парк Казань');

let cities    = L.layerGroup([littleton, denver, aurora, golden]);
var parks = L.layerGroup([crownHill, rubyHill]);











class LeafletMaps extends L.Class {
  constructor(id, options) {
    super();
    this.id = id;
    this.container = document.querySelector(this.id);
    this.options = options;

    this.renderMap();
  }
  
  renderMap() {
    this.map = new L.map(this.container, {...this.options});

    this.addTiles();
    this.addJsons();
  }
            
  addJsons () {
    let layers = this.options.dataLayers;
    if (layers.lenght != 0) {
      layers.forEach(item => {
        let itemL = L.geoJSON(item.gjson, { 
          style: {...item.style}, 
          interactive: item.options?.interactive? item.options.interactive:false,
        }).addTo(this.map);

        if (item.options) {
          itemL.on('mouseenter',item.options.handleMouseEnter());
        }
        
      })
    }
  }

  addTiles () {
    let baseLayerCRT = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(this.map);
    let baseLayerOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.baseMaps = {
      "BMap": baseLayerCRT,
      "OSM": baseLayerOSM
    };
    

    this.overlays = {'важные места': cities, 'парки': parks};
    L.control.layers(this.baseMaps, this.overlays).addTo(this.map);
  }

  }

export default LeafletMaps;