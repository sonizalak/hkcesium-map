import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomIn } from './zoom-in';

describe('ZoomIn', () => {
  let component: ZoomIn;
  let fixture: ComponentFixture<ZoomIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoomIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
