import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaTecnicaEvaluacionComponent } from './plansemanatecnicaevaluacion.component';

describe('PlanSemanaTecnicaEvaluacionComponent', () => {
   let component: PlanSemanaTecnicaEvaluacionComponent;
   let fixture: ComponentFixture<PlanSemanaTecnicaEvaluacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaTecnicaEvaluacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaTecnicaEvaluacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});