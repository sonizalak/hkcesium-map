import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Map } from './map/map';
import { HkMapRoutingModule } from './hk-map-routing.module';
import { GisThreeDMap } from './core/gis-three-d-map/gis-three-d-map';
import { MapButton } from './core/map-button/map-button';
import { ZoomIn } from './core/zoom-in/zoom-in';

@NgModule({
  declarations: [
    Map,
    GisThreeDMap,
    MapButton,
    ZoomIn
  ],
  imports: [
    CommonModule,
    HkMapRoutingModule
  ]
})
export class HkMapModule { }
