import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaFactoresAsociadosComponent } from './encuesta-factores-asociados.component';

describe('EncuestaFactoresAsociadosComponent', () => {
  let component: EncuestaFactoresAsociadosComponent;
  let fixture: ComponentFixture<EncuestaFactoresAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaFactoresAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaFactoresAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
