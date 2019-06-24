import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaPrerrequisitoComponent } from './asignaturaprerrequisito.component';

describe('AsignaturaPrerrequisitoComponent', () => {
   let component: AsignaturaPrerrequisitoComponent;
   let fixture: ComponentFixture<AsignaturaPrerrequisitoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignaturaPrerrequisitoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignaturaPrerrequisitoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});