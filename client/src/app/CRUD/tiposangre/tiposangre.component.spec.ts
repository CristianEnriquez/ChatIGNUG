import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoSangreComponent } from './tiposangre.component';

describe('TipoSangreComponent', () => {
   let component: TipoSangreComponent;
   let fixture: ComponentFixture<TipoSangreComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoSangreComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoSangreComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});