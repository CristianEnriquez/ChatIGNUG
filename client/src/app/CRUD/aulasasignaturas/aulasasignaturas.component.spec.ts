import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AulasAsignaturasComponent } from './aulasasignaturas.component';

describe('AulasAsignaturasComponent', () => {
   let component: AulasAsignaturasComponent;
   let fixture: ComponentFixture<AulasAsignaturasComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AulasAsignaturasComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AulasAsignaturasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});