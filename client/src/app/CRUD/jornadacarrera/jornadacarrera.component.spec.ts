import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JornadaCarreraComponent } from './jornadacarrera.component';

describe('JornadaCarreraComponent', () => {
   let component: JornadaCarreraComponent;
   let fixture: ComponentFixture<JornadaCarreraComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ JornadaCarreraComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(JornadaCarreraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});