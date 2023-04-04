
import * as L from 'leaflet';

class LetfletMaps extends L.map {
  constructor () {
    super (id, options);

    this.id = id;
    this.options = options;
    this.renderMap();
  }
  
  renderMap () {
    this.map = new L.map(this.id, this.options);
    this.map.attributionControl = false;
  }
}



export default LetfletMaps;