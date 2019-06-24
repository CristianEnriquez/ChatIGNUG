import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoInstitucionProcedenciaComponent } from './tipoinstitucionprocedencia.component';

describe('TipoInstitucionProcedenciaComponent', () => {
   let component: TipoInstitucionProcedenciaComponent;
   let fixture: ComponentFixture<TipoInstitucionProcedenciaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoInstitucionProcedenciaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoInstitucionProcedenciaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});