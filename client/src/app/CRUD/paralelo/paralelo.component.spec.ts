import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParaleloComponent } from './paralelo.component';

describe('ParaleloComponent', () => {
   let component: ParaleloComponent;
   let fixture: ComponentFixture<ParaleloComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ ParaleloComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ParaleloComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});