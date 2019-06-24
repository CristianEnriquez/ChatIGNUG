import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { fechaEvaluacionesParcialesComponent } from './fechaevaluacionesparciales.component';

describe('fechaEvaluacionesParcialesComponent', () => {
   let component: fechaEvaluacionesParcialesComponent;
   let fixture: ComponentFixture<fechaEvaluacionesParcialesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ fechaEvaluacionesParcialesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(fechaEvaluacionesParcialesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});