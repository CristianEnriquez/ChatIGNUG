import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PonderacionComponent } from './ponderacion.component';

describe('PonderacionComponent', () => {
   let component: PonderacionComponent;
   let fixture: ComponentFixture<PonderacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PonderacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PonderacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});