import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaPrerrequisitosComponent } from './plansemanaprerrequisitos.component';

describe('PlanSemanaPrerrequisitosComponent', () => {
   let component: PlanSemanaPrerrequisitosComponent;
   let fixture: ComponentFixture<PlanSemanaPrerrequisitosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaPrerrequisitosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaPrerrequisitosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});