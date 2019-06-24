import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoInstitucionPracticasPreprofesionalesComponent } from './tipoinstitucionpracticaspreprofesionales.component';

describe('TipoInstitucionPracticasPreprofesionalesComponent', () => {
   let component: TipoInstitucionPracticasPreprofesionalesComponent;
   let fixture: ComponentFixture<TipoInstitucionPracticasPreprofesionalesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoInstitucionPracticasPreprofesionalesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoInstitucionPracticasPreprofesionalesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});