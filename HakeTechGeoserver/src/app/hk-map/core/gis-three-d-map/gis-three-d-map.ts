import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import * as Cesium from 'cesium';
import { CesiumService } from '../cesium';

@Component({
  selector: 'app-gis-three-d-map',
  standalone: false,
  templateUrl: './gis-three-d-map.html',
  styleUrl: './gis-three-d-map.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GisThreeDMap implements AfterViewInit {

  public static viewer: Cesium.Viewer;
  constructor(private cesiumService: CesiumService) { }

  async ngAfterViewInit() {
    // initialize Cesium viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: await Cesium.createWorldTerrainAsync(),

      // disable default widgets (only globe)
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      //homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      creditContainer: document.createElement('div')
    });

    // 👇 optional: also expose globally for debugging
    //(window as any).cesiumViewer = GisThreeDMap.viewer;
    this.cesiumService.setViewer(viewer);
  }
}
