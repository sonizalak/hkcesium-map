// src/app/hk-map/core/cesium.service.ts
import { Injectable } from '@angular/core';
import * as Cesium from 'cesium';

@Injectable({
  providedIn: 'root' // ensures singleton service
})
export class CesiumService {
  private viewer?: Cesium.Viewer;

  setViewer(viewer: Cesium.Viewer) {
    this.viewer = viewer;
  }

  getViewer(): Cesium.Viewer | undefined {
    return this.viewer;
  }

  // Example helper method
  zoomIn(amount: number = 500000) {
    this.viewer?.camera.zoomIn(amount);
  }

  zoomOut(amount: number = 500000) {
    this.viewer?.camera.zoomOut(amount);
  }
}
