import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursosDidacticosComponent } from './recursosdidacticos.component';

describe('RecursosDidacticosComponent', () => {
   let component: RecursosDidacticosComponent;
   let fixture: ComponentFixture<RecursosDidacticosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ RecursosDidacticosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RecursosDidacticosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});