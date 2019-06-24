import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaMetodologiaComponent } from './plansemanametodologia.component';

describe('PlanSemanaMetodologiaComponent', () => {
   let component: PlanSemanaMetodologiaComponent;
   let fixture: ComponentFixture<PlanSemanaMetodologiaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaMetodologiaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaMetodologiaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});