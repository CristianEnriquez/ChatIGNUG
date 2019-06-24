import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RolSecundarioComponent } from './rolsecundario.component';

describe('RolSecundarioComponent', () => {
   let component: RolSecundarioComponent;
   let fixture: ComponentFixture<RolSecundarioComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ RolSecundarioComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RolSecundarioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});