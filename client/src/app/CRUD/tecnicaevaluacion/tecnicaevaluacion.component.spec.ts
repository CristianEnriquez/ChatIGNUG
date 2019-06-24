import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicaEvaluacionComponent } from './tecnicaevaluacion.component';

describe('TecnicaEvaluacionComponent', () => {
   let component: TecnicaEvaluacionComponent;
   let fixture: ComponentFixture<TecnicaEvaluacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TecnicaEvaluacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TecnicaEvaluacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});