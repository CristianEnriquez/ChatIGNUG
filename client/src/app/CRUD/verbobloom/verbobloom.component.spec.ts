import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VerboBloomComponent } from './verbobloom.component';

describe('VerboBloomComponent', () => {
   let component: VerboBloomComponent;
   let fixture: ComponentFixture<VerboBloomComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ VerboBloomComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(VerboBloomComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});