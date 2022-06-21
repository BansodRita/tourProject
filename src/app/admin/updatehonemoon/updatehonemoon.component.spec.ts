import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehonemoonComponent } from './updatehonemoon.component';

describe('UpdatehonemoonComponent', () => {
  let component: UpdatehonemoonComponent;
  let fixture: ComponentFixture<UpdatehonemoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatehonemoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehonemoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
