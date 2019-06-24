import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodoAcademicoComponent } from './periodoacademico.component';

describe('PeriodoAcademicoComponent', () => {
   let component: PeriodoAcademicoComponent;
   let fixture: ComponentFixture<PeriodoAcademicoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PeriodoAcademicoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PeriodoAcademicoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});