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
  covJson = [
    {
      "type": "Coverage",
      "domain": {
        "type": "Domain",
        "domainType": "Grid",
        "axes": {
          "x": {
            "start": 100.56007845982802,
            "stop": 100.5618218956877,
            "num": 20
          },
          "y": {
            "start": 13.638378593088225,
            "stop": 13.637384506735415,
            "num": 12
          },
          "t": {
            "values": [
              "2023-07-30T00:00:00Z",
              "2023-08-02T00:00:00Z",
              "2023-08-04T00:00:00Z",
              "2023-08-07T00:00:00Z",
              "2023-08-09T00:00:00Z",
              "2023-08-12T00:00:00Z",
              "2023-08-19T00:00:00Z",
              "2023-08-29T00:00:00Z"
            ]
          }
        },
        "referencing": [
          {
            "coordinates": [
              "x",
              "y"
            ],
            "system": {
              "type": "GeographicCRS",
              "id": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
            }
          },
          {
            "coordinates": [
              "t"
            ],
            "system": {
              "type": "TemporalRS",
              "calendar": "Gregorian"
            }
          }
        ]
      },
      "parameters": {
        "NDVI": {
          "type": "Parameter",
          "observedProperty": {
            "label": {
              "en": "แปลงทดสอบ"
            }
          }
        }
      },
      "ranges": {
        "NDVI": {
          "type": "NdArray",
          "dataType": "float",
          "axisNames": [
            "t",
            "y",
            "x"
          ],
          "shape": [
            8,
            12,
            20
          ],
          "values": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.52,
            0.54,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.56,
            0.59,
            0.58,
            0.52,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.47,
            0.52,
            0.62,
            0.62,
            0.58,
            0.49,
            0.45,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.54,
            0.55,
            0.54,
            0.54,
            0.57,
            0.55,
            0.51,
            0.46,
            0.52,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.33,
            0.51,
            0.59,
            0.55,
            0.45,
            0.41,
            0.52,
            0.52,
            0.49,
            0.46,
            0.47,
            0.47,
            null,
            null,
            null,
            null,
            null,
            null,
            0.39,
            0.41,
            0.51,
            0.6,
            0.61,
            0.56,
            0.46,
            0.47,
            0.54,
            0.51,
            0.48,
            0.52,
            0.47,
            0.43,
            0.49,
            null,
            null,
            0.3,
            0.31,
            0.37,
            0.45,
            0.49,
            0.57,
            0.62,
            0.62,
            0.58,
            0.53,
            0.5,
            0.49,
            0.32,
            0.18,
            0.34,
            0.51,
            0.45,
            0.44,
            null,
            null,
            0.18,
            0.21,
            0.24,
            0.36,
            0.41,
            0.5,
            0.62,
            0.58,
            0.5,
            0.41,
            0.32,
            0.32,
            0.23,
            0.16,
            0.33,
            0.54,
            0.52,
            0.43,
            0.49,
            null,
            null,
            null,
            0.12,
            0.16,
            0.25,
            0.36,
            0.5,
            0.49,
            0.45,
            0.34,
            0.23,
            0.26,
            0.2,
            0.18,
            0.26,
            0.44,
            0.48,
            0.45,
            0.46,
            0.35,
            null,
            null,
            null,
            null,
            null,
            0.13,
            0.22,
            0.32,
            0.41,
            0.39,
            0.3,
            0.23,
            0.16,
            0.18,
            0.17,
            0.25,
            0.33,
            0.33,
            0.27,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.25,
            0.31,
            0.32,
            0.22,
            0.13,
            0.18,
            0.19,
            0.18,
            0.19,
            0.19,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.14,
            0.22,
            0.3,
            0.24,
            0.18,
            0.29,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.73,
            0.74,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.85,
            0.86,
            0.79,
            0.65,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.61,
            0.85,
            0.88,
            0.81,
            0.76,
            0.54,
            0.54,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.8,
            0.81,
            0.82,
            0.73,
            0.77,
            0.74,
            0.57,
            0.59,
            0.72,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.84,
            0.85,
            0.62,
            0.56,
            0.76,
            0.71,
            0.64,
            0.58,
            0.64,
            0.73,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.81,
            0.81,
            0.69,
            0.77,
            0.79,
            0.69,
            0.69,
            0.64,
            0.59,
            0.66,
            0.77,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.83,
            0.83,
            0.82,
            0.8,
            0.68,
            0.31,
            0.29,
            0.5,
            0.69,
            0.62,
            0.68,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.76,
            0.71,
            0.51,
            0.44,
            0.31,
            0.17,
            0.15,
            0.36,
            0.89,
            0.74,
            0.71,
            0.83,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.29,
            0.3,
            0.15,
            0.17,
            0.15,
            0.24,
            0.76,
            0.74,
            0.75,
            0.72,
            0.44,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.45,
            0.41,
            0.11,
            0.13,
            0.1,
            0.1,
            0.37,
            0.47,
            0.48,
            0.28,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.38,
            0.41,
            0.12,
            0.1,
            0.08,
            0.1,
            0.06,
            0.14,
            0.08,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.01,
            0.22,
            0.38,
            0.28,
            0.15,
            0.3,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getMap("NDVI1");
  }

  getMap(target?){
    if (this.map) {
      this.map.remove();
    }
    this.map = L.map('map', { center: [18, 5], zoom: 17 });
    var map = this.map;

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(map)

    var layers : string[] = [];

    this.covJson.map((cov)=>{
      let t = cov.ranges.NDVI.shape[0];
      let y = cov.ranges.NDVI.shape[1];
      let x = cov.ranges.NDVI.shape[2];
      let values = cov.ranges.NDVI.values;
      let countJson = cov.ranges.NDVI.values.length;
      let countPerTime = y*x;

      if(countJson > countPerTime){
        let start = countJson - countPerTime;
        let stop = countJson;
        for (let index = 0; index < t; index++) {
 
          let filterValues = values.filter((number, v) => v >= start &&  v <= stop);

          if(filterValues.find(number=> number)){
            cov.ranges.NDVI.values = filterValues;
            break;
          }else{
            stop = start - 1;
            start = stop - countPerTime+1;
          }
        }
      }

      CovJSON.read(cov).then(function (coverage) {
        
        let layer = C.dataLayer(coverage, {parameter: 'NDVI', palette: C.linearPalette(['#FF0000','#FF7F50', '#FFFF00', '#00FF00', '#006A4E']),})
        .on('afterAdd', function () {
          if (layer.palette) {
            C.legend(layer).addTo(map)
          }
          map.fitBounds(layer.getBounds())
        })
        .addTo(map);

        layers.push(layer);
      })
    })

    map.on('click', function (e) {
      new C.DraggableValuePopup({
        layers: layers
      }).setLatLng(e['latlng']).openOn(map);
    })
  }

  change(event){
    this.getMap(event.target.value);
  }
}
