import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboBiliografiaComponent } from './silabobiliografia.component';

describe('SilaboBiliografiaComponent', () => {
   let component: SilaboBiliografiaComponent;
   let fixture: ComponentFixture<SilaboBiliografiaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboBiliografiaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboBiliografiaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});