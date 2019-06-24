import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasClaseComponent } from './horasclase.component';

describe('HorasClaseComponent', () => {
   let component: HorasClaseComponent;
   let fixture: ComponentFixture<HorasClaseComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ HorasClaseComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(HorasClaseComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});