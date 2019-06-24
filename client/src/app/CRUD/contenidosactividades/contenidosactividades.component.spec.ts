import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidosActividadesComponent } from './contenidosactividades.component';

describe('ContenidosActividadesComponent', () => {
   let component: ContenidosActividadesComponent;
   let fixture: ComponentFixture<ContenidosActividadesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ ContenidosActividadesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ContenidosActividadesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});