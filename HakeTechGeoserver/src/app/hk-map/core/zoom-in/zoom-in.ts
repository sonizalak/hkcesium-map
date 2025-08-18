import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CesiumService } from '../cesium';


@Component({
  selector: 'app-zoom-in',
  standalone: false,
  templateUrl: './zoom-in.html',
  styleUrl: './zoom-in.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoomIn {
  constructor(private cesiumService: CesiumService) { }
  zoomIn() {
    this.cesiumService.zoomIn(); // use service method
  }
}
