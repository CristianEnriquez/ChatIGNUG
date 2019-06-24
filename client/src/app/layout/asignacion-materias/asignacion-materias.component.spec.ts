import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionMateriasComponent } from './asignacion-materias.component';

describe('AsignacionMateriasComponent', () => {
  let component: AsignacionMateriasComponent;
  let fixture: ComponentFixture<AsignacionMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
