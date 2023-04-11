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
    this.addLayersGroup();
    this.addGeoJSONLayersControl();
  }
            
  addLayers () {
    let layers = this.options.dataLayers;
    this.layersGroup = L.layerGroup();
    
    if (layers.length != 0) {
      layers.forEach(item => {
        let itemL = L.geoJSON(item.gjson, { 
          style: {...item.style}, 
          interactive: item.options?.interactive? item.options.interactive:false,
        });

        if (item.options && item.options.handleMouseEnter) {
          itemL.on('mouseover', item.options.handleMouseEnter);
          itemL.on('mouseout', item.options.handleMouseLeave);
        }
        this.layersGroup.addLayer(itemL);
      });
      this.layersGroup.addTo(this.map);
    }
  }


  addLayersGroup() {
    if (this.options.dataLayersGroup) {
      let layers = this.options.dataLayers;
      this.options.dataLayersGroup.forEach(item => {
        let newGroup = layers.filter(layer => item.layers.includes(layer));
        let groupLayer = L.layerGroup();
        newGroup.forEach(layer => {
          let layerL = L.geoJSON(layer.gjson, {
            style: {...layer.style, ...item.style},
            interactive: item.options?.interactive ? item.options.interactive : false,
          });
          if (item.options && item.options.handleMouseEnter) {
            layerL.on('mouseover', item.options.handleMouseEnter);
            layerL.on('mouseout', item.options.handleMouseLeave);
          }
          groupLayer.addLayer(layerL);
        });
        groupLayer.addTo(this.map);
      });
    }
  }

  addGeoJSONLayersControl(options) {
    let layers = options.dataLayers;
    let overlays = {};
    layers.forEach(item => {
      overlays[item.name] = L.geoJSON(item.gjson, {
        style: {...item.style},
        interactive: item.options?.interactive ? item.options.interactive : false,
      });
      if (item.options && item.options.handleMouseEnter) {
        overlays[item.name].on('mouseover', item.options.handleMouseEnter);
        overlays[item.name].on('mouseout', item.options.handleMouseLeave);
      }
    });
    L.control.layers(options.baseLayers, overlays, options.controlOptions).addTo(options.map);
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


/*   new LeafletMaps( '#ekbmap', {
                              zoom: 9,
                              attributionControl : false,
                              zoomControl: true,
                              keyboard: false,
                              scrollWheelZoom: false,
                              center: [55.796127, 49.106414],
                              tap: false,
                              zoomControl:false,
                              fullscreenControl: false,
                              clickFitBounds: false,
                              clickPanToLayer: false,
                              maxBounds: [[55.1,48.0108],[56.45,50.2238]],
                              minZoom: 8,
                              maxZoom: 18,
                              
                              dataLayersGroup: [
                                { 
                                  layers: [volzhsk, kazan, arskiy],
                                  style: {
                                    color: 'hotpink',
                                    weight: 1,
                                    fillColor: 'hotpink',
                                    fillOpacity: 0.3
                                  },
                                  options: {
                                    interactive: true,
                                    handleMouseEnter: function(e) {
                                      this.setStyle({fillColor: '#4BB96A', fillOpacity: 0.3});
                                    },
                                    handleMouseLeave: function(e) {
                                      this.setStyle({ fillOpacity: 0});
                                    }
                                  }
                                }
                              ],
                              dataLayers: [ 
                                { name: 'Вся территория',
                                  gjson: allGroup,
                                  style: {fillOpacity:0} },

                                { name: 'Все районы',
                                  gjson: district,
                                  style: {fillOpacity:0}  },

                                { name: 'Арский',
                                  gjson: arskiy,
                                  style: { fillOpacity: 0 },
                                  options: {
                                    interactive: true,
                                    handleMouseEnter: function(e) {
                                      this.setStyle({fillColor: '#6990BA', fillOpacity: 0.3});
                                    },
                                    handleMouseLeave: function(e) {
                                      this.setStyle({ fillOpacity: 0});
                                    }
                                  }
                                },

                                { name: 'го Волжск',
                                  gjson: volzhsk,
                                  style: { fillOpacity: 0 },
                                  options: {
                                    interactive: true,
                                    handleMouseEnter: function(e) {
                                      this.setStyle({fillColor: '#6990BA', fillOpacity: 0.3});
                                    },
                                    handleMouseLeave: function(e) {
                                      this.setStyle({ fillOpacity: 0});
                                    }
                                  }
                                },

                                { name: 'го Казань',
                                  gjson: kazan,
                                  style: { fillOpacity: 0 },
                                  options: {
                                    interactive: true,
                                    handleMouseEnter: function(e) {
                                      this.setStyle({fillColor: '#6990BA', fillOpacity: 0.3});
                                    },
                                    handleMouseLeave: function(e) {
                                      this.setStyle({ fillOpacity: 0});
                                    }
                                  }
                                },

                                { name: 'КамсУральский',
                                  gjson: kamskU,
                                  style: { fillOpacity: 0 }},

                                { name: 'Леишевский',
                                  gjson: laishev,
                                  style: { fillOpacity: 0 }},

                                { name: 'Пестреченский',
                                  gjson: pestrech,
                                  style: { fillOpacity: 0 }},

                                { name: 'Рыбный',
                                  gjson: rybnaya,
                                  style: { fillOpacity: 0 }},

                                { name: 'Верхнеустский',
                                  gjson: verhneust,
                                  style: { fillOpacity: 0 }},

                                { name: 'Высокогорский',
                                  gjson: visokogorsk,
                                  style: { fillOpacity: 0 }},

                                { name: 'Волжский',
                                  gjson: volshskiy,
                                  style: { fillOpacity: 0 }},
                                
                                { name: 'Зеленый',
                                  gjson: zelenodolskiy,
                                  style: { fillOpacity: 0 }},
                              ],
                            })  */

