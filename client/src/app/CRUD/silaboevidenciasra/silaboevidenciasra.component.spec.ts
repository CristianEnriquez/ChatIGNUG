import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboEvidenciasRaComponent } from './silaboevidenciasra.component';

describe('SilaboEvidenciasRaComponent', () => {
   let component: SilaboEvidenciasRaComponent;
   let fixture: ComponentFixture<SilaboEvidenciasRaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboEvidenciasRaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboEvidenciasRaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});