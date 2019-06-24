import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoAulaComponent } from './tipoaula.component';

describe('TipoAulaComponent', () => {
   let component: TipoAulaComponent;
   let fixture: ComponentFixture<TipoAulaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoAulaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoAulaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});