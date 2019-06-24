import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaCorrequisitoComponent } from './asignaturacorrequisito.component';

describe('AsignaturaCorrequisitoComponent', () => {
   let component: AsignaturaCorrequisitoComponent;
   let fixture: ComponentFixture<AsignaturaCorrequisitoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignaturaCorrequisitoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignaturaCorrequisitoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});