import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EducacionContinuaComponent } from './educacioncontinua.component';

describe('EducacionContinuaComponent', () => {
   let component: EducacionContinuaComponent;
   let fixture: ComponentFixture<EducacionContinuaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EducacionContinuaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EducacionContinuaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});