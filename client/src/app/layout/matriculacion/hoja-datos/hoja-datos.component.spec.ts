import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDatosComponent } from './hoja-datos.component';

describe('HojaDatosComponent', () => {
  let component: HojaDatosComponent;
  let fixture: ComponentFixture<HojaDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
