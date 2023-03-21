import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelProfileChipsComponent } from './hotel-profile-chips.component';

describe('HotelProfileChipsComponent', () => {
  let component: HotelProfileChipsComponent;
  let fixture: ComponentFixture<HotelProfileChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelProfileChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelProfileChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
