import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpakagesComponent } from './allpakages.component';

describe('AllpakagesComponent', () => {
  let component: AllpakagesComponent;
  let fixture: ComponentFixture<AllpakagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpakagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpakagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
