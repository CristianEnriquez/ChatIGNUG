import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalidadCarreraComponent } from './modalidadcarrera.component';

describe('ModalidadCarreraComponent', () => {
   let component: ModalidadCarreraComponent;
   let fixture: ComponentFixture<ModalidadCarreraComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ ModalidadCarreraComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ModalidadCarreraComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});