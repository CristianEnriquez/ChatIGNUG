import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoEducacionContinuaComponent } from './tipoeducacioncontinua.component';

describe('TipoEducacionContinuaComponent', () => {
   let component: TipoEducacionContinuaComponent;
   let fixture: ComponentFixture<TipoEducacionContinuaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoEducacionContinuaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoEducacionContinuaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});