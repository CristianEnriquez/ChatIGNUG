import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaEjeTransversalComponent } from './plansemanaejetransversal.component';

describe('PlanSemanaEjeTransversalComponent', () => {
   let component: PlanSemanaEjeTransversalComponent;
   let fixture: ComponentFixture<PlanSemanaEjeTransversalComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaEjeTransversalComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaEjeTransversalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});