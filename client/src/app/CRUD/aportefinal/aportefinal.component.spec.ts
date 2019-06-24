import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AporteFinalComponent } from './aportefinal.component';

describe('AporteFinalComponent', () => {
   let component: AporteFinalComponent;
   let fixture: ComponentFixture<AporteFinalComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AporteFinalComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AporteFinalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});