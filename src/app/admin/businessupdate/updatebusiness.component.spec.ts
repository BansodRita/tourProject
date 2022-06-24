import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebusinessComponent } from './updatebusiness.component';

describe('UpdatebusinessComponent', () => {
  let component: UpdatebusinessComponent;
  let fixture: ComponentFixture<UpdatebusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
