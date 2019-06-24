import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorEconomicoPracticasPreprofesionalesComponent } from './sectoreconomicopracticaspreprofesionales.component';

describe('SectorEconomicoPracticasPreprofesionalesComponent', () => {
   let component: SectorEconomicoPracticasPreprofesionalesComponent;
   let fixture: ComponentFixture<SectorEconomicoPracticasPreprofesionalesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SectorEconomicoPracticasPreprofesionalesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SectorEconomicoPracticasPreprofesionalesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});