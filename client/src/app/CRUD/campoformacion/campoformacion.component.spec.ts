import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CampoFormacionComponent } from './campoformacion.component';

describe('CampoFormacionComponent', () => {
   let component: CampoFormacionComponent;
   let fixture: ComponentFixture<CampoFormacionComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CampoFormacionComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CampoFormacionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});