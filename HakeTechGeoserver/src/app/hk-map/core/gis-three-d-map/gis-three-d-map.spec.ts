import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisThreeDMap } from './gis-three-d-map';

describe('GisThreeDMap', () => {
  let component: GisThreeDMap;
  let fixture: ComponentFixture<GisThreeDMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GisThreeDMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GisThreeDMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
