import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFamilyComponent } from './single_family.component';

describe('SingleFamilyComponent', () => {
  let component: SingleFamilyComponent;
  let fixture: ComponentFixture<SingleFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
