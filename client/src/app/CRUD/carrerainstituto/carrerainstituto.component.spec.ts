import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreraInstitutoComponent } from './carrerainstituto.component';

describe('CarreraInstitutoComponent', () => {
   let component: CarreraInstitutoComponent;
   let fixture: ComponentFixture<CarreraInstitutoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CarreraInstitutoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CarreraInstitutoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});