import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MotivoSalidaComponent } from './motivosalida.component';

describe('MotivoSalidaComponent', () => {
   let component: MotivoSalidaComponent;
   let fixture: ComponentFixture<MotivoSalidaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ MotivoSalidaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MotivoSalidaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});