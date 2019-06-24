import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaTemaComponent } from './plansemanatema.component';

describe('PlanSemanaTemaComponent', () => {
   let component: PlanSemanaTemaComponent;
   let fixture: ComponentFixture<PlanSemanaTemaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaTemaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaTemaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});