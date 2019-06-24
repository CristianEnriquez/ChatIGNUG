import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnidadOrganizacionComponent } from './unidadorganizacion.component';

describe('UnidadOrganizacionComponent', () => {
   let component: UnidadOrganizacionComponent;
   let fixture: ComponentFixture<UnidadOrganizacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ UnidadOrganizacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(UnidadOrganizacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});