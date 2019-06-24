import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaMigratoriaComponent } from './categoriamigratoria.component';

describe('CategoriaMigratoriaComponent', () => {
   let component: CategoriaMigratoriaComponent;
   let fixture: ComponentFixture<CategoriaMigratoriaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CategoriaMigratoriaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CategoriaMigratoriaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});