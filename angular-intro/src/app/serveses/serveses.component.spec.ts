

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServesesComponent } from './serveses.component';

describe('ServesesComponent', () => {
  let component: ServesesComponent;
  let fixture: ComponentFixture<ServesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
