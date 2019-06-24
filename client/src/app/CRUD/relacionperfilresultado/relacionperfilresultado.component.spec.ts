import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelacionPerfilResultadoComponent } from './relacionperfilresultado.component';

describe('RelacionPerfilResultadoComponent', () => {
   let component: RelacionPerfilResultadoComponent;
   let fixture: ComponentFixture<RelacionPerfilResultadoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ RelacionPerfilResultadoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RelacionPerfilResultadoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});