import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaCupoComponent } from './asignaturacupo.component';

describe('AsignaturaCupoComponent', () => {
   let component: AsignaturaCupoComponent;
   let fixture: ComponentFixture<AsignaturaCupoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignaturaCupoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignaturaCupoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});