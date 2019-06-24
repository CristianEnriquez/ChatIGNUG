import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoRequisitoComponent } from './tiporequisito.component';

describe('TipoRequisitoComponent', () => {
   let component: TipoRequisitoComponent;
   let fixture: ComponentFixture<TipoRequisitoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoRequisitoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoRequisitoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});