import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEstudiantesNuevosComponent } from './contacto-estudiantes-nuevos.component';

describe('ContactoEstudiantesNuevosComponent', () => {
  let component: ContactoEstudiantesNuevosComponent;
  let fixture: ComponentFixture<ContactoEstudiantesNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoEstudiantesNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEstudiantesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
