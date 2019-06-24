import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CargoInstitutoComponent } from './cargoinstituto.component';

describe('CargoInstitutoComponent', () => {
   let component: CargoInstitutoComponent;
   let fixture: ComponentFixture<CargoInstitutoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CargoInstitutoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CargoInstitutoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});