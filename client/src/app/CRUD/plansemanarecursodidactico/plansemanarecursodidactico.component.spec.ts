import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanaRecursoDidacticoComponent } from './plansemanarecursodidactico.component';

describe('PlanSemanaRecursoDidacticoComponent', () => {
   let component: PlanSemanaRecursoDidacticoComponent;
   let fixture: ComponentFixture<PlanSemanaRecursoDidacticoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PlanSemanaRecursoDidacticoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PlanSemanaRecursoDidacticoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});