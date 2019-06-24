import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaObjetivoComponent } from './plansemanaobjetivo.component';

describe('PlanSemanaObjetivoComponent', () => {
   let component: PlanSemanaObjetivoComponent;
   let fixture: ComponentFixture<PlanSemanaObjetivoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaObjetivoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaObjetivoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});