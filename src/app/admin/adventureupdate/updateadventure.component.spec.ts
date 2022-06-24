import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadventureComponent } from './updateadventure.component';

describe('UpdateadventureComponent', () => {
  let component: UpdateadventureComponent;
  let fixture: ComponentFixture<UpdateadventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateadventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
