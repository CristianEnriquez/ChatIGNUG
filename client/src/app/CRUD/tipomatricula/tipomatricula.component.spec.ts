import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoMatriculaComponent } from './tipomatricula.component';

describe('TipoMatriculaComponent', () => {
   let component: TipoMatriculaComponent;
   let fixture: ComponentFixture<TipoMatriculaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoMatriculaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoMatriculaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});