import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilEgresoComponent } from './perfilegreso.component';

describe('PerfilEgresoComponent', () => {
   let component: PerfilEgresoComponent;
   let fixture: ComponentFixture<PerfilEgresoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PerfilEgresoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PerfilEgresoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});