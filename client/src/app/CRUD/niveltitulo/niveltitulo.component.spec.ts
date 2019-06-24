import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelTituloComponent } from './niveltitulo.component';

describe('NivelTituloComponent', () => {
   let component: NivelTituloComponent;
   let fixture: ComponentFixture<NivelTituloComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ NivelTituloComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NivelTituloComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});