import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlcanceProyectoVinculacionComponent } from './alcanceproyectovinculacion.component';

describe('AlcanceProyectoVinculacionComponent', () => {
   let component: AlcanceProyectoVinculacionComponent;
   let fixture: ComponentFixture<AlcanceProyectoVinculacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AlcanceProyectoVinculacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AlcanceProyectoVinculacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});