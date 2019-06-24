import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaAplicacionComponent } from './plansemanaaplicacion.component';

describe('PlanSemanaAplicacionComponent', () => {
   let component: PlanSemanaAplicacionComponent;
   let fixture: ComponentFixture<PlanSemanaAplicacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaAplicacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaAplicacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});