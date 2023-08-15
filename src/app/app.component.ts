import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as CovJSON from 'covjson-reader';
import * as C from 'leaflet-coverage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  map: L.Map;

  constructor() { }

  ngOnInit(): void {
    var map = L.map('map', { center: [10, 0], zoom: 2 })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
    
    var layers = L.control.layers(undefined, undefined, {collapsed: false}).addTo(map)
    
    var layer;
    CovJSON.read({
      "type" : "Coverage",
      "domain" : {
        "type" : "Domain",
        "domainType" : "Grid",
        "axes": {
          "x" : { "start": 7, "stop": 14, "num": 4 },
          "y" : { "start": 54, "stop": 48, "num": 4 }
        },
        "referencing": [{
          "coordinates": ["x","y"],
          "system": {
            "type": "GeographicCRS",
            "id": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
          }
        }]
      },
      "parameters" : {
        "ndvi": {
          "type" : "Parameter",
          "description": {
            "en": "Air temperature measured in degrees Celsius."
          },
          "unit" : {
            "label": {
              "en": "Degree Celsius"
            },
            "symbol": {
              "value": "Cel",
              "type": "http://www.opengis.net/def/uom/UCUM/"
            }
          },
          "observedProperty" : {
            "id": "http://vocab.nerc.ac.uk/standard_name/air_temperature/",
            "label" : {
              "en": "NDVI",
              "de": "Lufttemperatur"
            }
          }
        }
      },
      "ranges" : {
        "ndvi" : {
          "type" : "NdArray",
          "dataType": "float",
          "axisNames": ["y", "x"],
          "shape": [4, 4],
          "values" : [
            17.3, 18.2, 16.5, 18.7,
            18.1, 19.4, 17.2, 18.6,
            19.2, 20.4, 21.1, 20.7,
            21.1, 21.3, 20.5, 19.2
          ]
        }
      }
    }).then(function (coverage) {
      
      layer = C.dataLayer(coverage, {parameter: 'ndvi', palette: C.linearPalette(['#FFFFFF', '#000000']),})
        .on('afterAdd', function () {
          C.legend(layer).addTo(map)
          map.fitBounds(layer.getBounds())
        })
        .addTo(map)
      layers.addOverlay(layer, 'NDVI')
    })
    
    map.on('click', function (e) {
      new C.DraggableValuePopup({
        layers: [layer]
      }).setLatLng(e.latlng).openOn(map)
    })
  }
}
