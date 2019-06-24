import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaDesarrolloClaseComponent } from './plansemanadesarrolloclase.component';

describe('PlanSemanaDesarrolloClaseComponent', () => {
   let component: PlanSemanaDesarrolloClaseComponent;
   let fixture: ComponentFixture<PlanSemanaDesarrolloClaseComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaDesarrolloClaseComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaDesarrolloClaseComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});