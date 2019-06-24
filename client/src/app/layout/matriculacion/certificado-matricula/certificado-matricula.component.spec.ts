import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoMatriculaComponent } from './certificado-matricula.component';

describe('CertificadoMatriculaComponent', () => {
  let component: CertificadoMatriculaComponent;
  let fixture: ComponentFixture<CertificadoMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
