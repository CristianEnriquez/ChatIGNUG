import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EtniaComponent } from './etnia.component';

describe('EtniaComponent', () => {
   let component: EtniaComponent;
   let fixture: ComponentFixture<EtniaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EtniaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EtniaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});