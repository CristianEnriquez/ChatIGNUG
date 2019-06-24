import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoContenidoActividadComponent } from './tipocontenidoactividad.component';

describe('TipoContenidoActividadComponent', () => {
   let component: TipoContenidoActividadComponent;
   let fixture: ComponentFixture<TipoContenidoActividadComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoContenidoActividadComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoContenidoActividadComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});