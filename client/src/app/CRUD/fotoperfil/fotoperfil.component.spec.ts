import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FotoPerfilComponent } from './fotoperfil.component';

describe('FotoPerfilComponent', () => {
   let component: FotoPerfilComponent;
   let fixture: ComponentFixture<FotoPerfilComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ FotoPerfilComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(FotoPerfilComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});