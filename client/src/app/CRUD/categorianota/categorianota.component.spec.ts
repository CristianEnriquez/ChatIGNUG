import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaNotaComponent } from './categorianota.component';

describe('CategoriaNotaComponent', () => {
   let component: CategoriaNotaComponent;
   let fixture: ComponentFixture<CategoriaNotaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CategoriaNotaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CategoriaNotaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});