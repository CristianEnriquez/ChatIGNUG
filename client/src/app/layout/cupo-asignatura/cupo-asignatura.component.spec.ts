import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupoAsignaturaComponent } from './cupo-asignatura.component';

describe('CupoAsignaturaComponent', () => {
  let component: CupoAsignaturaComponent;
  let fixture: ComponentFixture<CupoAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupoAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupoAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
