import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidosElementosComponent } from './contenidoselementos.component';

describe('ContenidosElementosComponent', () => {
   let component: ContenidosElementosComponent;
   let fixture: ComponentFixture<ContenidosElementosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ ContenidosElementosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ContenidosElementosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});