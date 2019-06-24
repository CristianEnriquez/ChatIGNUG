import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CargoCarreraComponent } from './cargocarrera.component';

describe('CargoCarreraComponent', () => {
   let component: CargoCarreraComponent;
   let fixture: ComponentFixture<CargoCarreraComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CargoCarreraComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CargoCarreraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});