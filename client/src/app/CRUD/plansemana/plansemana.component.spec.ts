import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaComponent } from './plansemana.component';

describe('PlanSemanaComponent', () => {
   let component: PlanSemanaComponent;
   let fixture: ComponentFixture<PlanSemanaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});