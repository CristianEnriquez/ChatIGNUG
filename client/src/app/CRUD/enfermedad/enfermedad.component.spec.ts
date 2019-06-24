import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfermedadComponent } from './enfermedad.component';

describe('EnfermedadComponent', () => {
   let component: EnfermedadComponent;
   let fixture: ComponentFixture<EnfermedadComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EnfermedadComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EnfermedadComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});