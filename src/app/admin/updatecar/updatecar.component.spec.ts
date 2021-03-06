import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarComponent } from './updatecar.component';

describe('UpdateCarComponent', () => {
  let component: UpdateCarComponent;
  let fixture: ComponentFixture<UpdateCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
