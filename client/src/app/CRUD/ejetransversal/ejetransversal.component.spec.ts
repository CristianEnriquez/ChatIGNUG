import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EjeTransversalComponent } from './ejetransversal.component';

describe('EjeTransversalComponent', () => {
   let component: EjeTransversalComponent;
   let fixture: ComponentFixture<EjeTransversalComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EjeTransversalComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EjeTransversalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});