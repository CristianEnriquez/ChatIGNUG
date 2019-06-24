import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaSubTemaComponent } from './plansemanasubtema.component';

describe('PlanSemanaSubTemaComponent', () => {
   let component: PlanSemanaSubTemaComponent;
   let fixture: ComponentFixture<PlanSemanaSubTemaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaSubTemaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaSubTemaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});