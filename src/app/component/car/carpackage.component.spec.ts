import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPackageComponent } from './carpackage.component';

describe('HotelComponent', () => {
  let component: CarPackageComponent;
  let fixture: ComponentFixture<CarPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
