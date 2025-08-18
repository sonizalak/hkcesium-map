import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapButton } from './map-button';

describe('MapButton', () => {
  let component: MapButton;
  let fixture: ComponentFixture<MapButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
