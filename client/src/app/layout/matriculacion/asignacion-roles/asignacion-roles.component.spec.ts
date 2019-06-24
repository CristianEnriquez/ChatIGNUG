import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignacionRolesComponent } from './asignacion-roles.component';

describe('AsignacionRolesComponent', () => {
   let component: AsignacionRolesComponent;
   let fixture: ComponentFixture<AsignacionRolesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignacionRolesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignacionRolesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
