import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefamilyComponent } from './updatefamily.component';

describe('UpdatefamilyComponent', () => {
  let component: UpdatefamilyComponent;
  let fixture: ComponentFixture<UpdatefamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
