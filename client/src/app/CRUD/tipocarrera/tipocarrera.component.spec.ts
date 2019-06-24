import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoCarreraComponent } from './tipocarrera.component';

describe('TipoCarreraComponent', () => {
   let component: TipoCarreraComponent;
   let fixture: ComponentFixture<TipoCarreraComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoCarreraComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoCarreraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});