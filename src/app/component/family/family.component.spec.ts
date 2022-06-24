import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { familyComponent } from './family.component';

describe('familyComponent', () => {
  let component: familyComponent;
  let fixture: ComponentFixture<familyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ familyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(familyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
