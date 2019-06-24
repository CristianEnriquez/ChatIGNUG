import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaAporteComponent } from './categoriaaporte.component';

describe('CategoriaAporteComponent', () => {
   let component: CategoriaAporteComponent;
   let fixture: ComponentFixture<CategoriaAporteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CategoriaAporteComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CategoriaAporteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});