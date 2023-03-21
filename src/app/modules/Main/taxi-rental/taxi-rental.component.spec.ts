import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiRentalComponent } from './taxi-rental.component';

describe('TaxiRentalComponent', () => {
  let component: TaxiRentalComponent;
  let fixture: ComponentFixture<TaxiRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
