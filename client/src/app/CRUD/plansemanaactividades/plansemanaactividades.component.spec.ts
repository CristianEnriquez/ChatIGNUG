import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaActividadesComponent } from './plansemanaactividades.component';

describe('PlanSemanaActividadesComponent', () => {
   let component: PlanSemanaActividadesComponent;
   let fixture: ComponentFixture<PlanSemanaActividadesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaActividadesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaActividadesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});