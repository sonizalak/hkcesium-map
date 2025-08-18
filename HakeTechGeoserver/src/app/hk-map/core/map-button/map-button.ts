import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'map-button',
  standalone: false,
  templateUrl: './map-button.html',
  styleUrl: './map-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapButton {
  @Input() title: string = '';
  @Input() tooltip: string = '';
  @Output() onClick = new EventEmitter<void>();
}
