import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodoLectivoComponent } from './periodolectivo.component';

describe('PeriodoLectivoComponent', () => {
   let component: PeriodoLectivoComponent;
   let fixture: ComponentFixture<PeriodoLectivoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PeriodoLectivoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PeriodoLectivoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});