import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiaSemanaComponent } from './diasemana.component';

describe('DiaSemanaComponent', () => {
   let component: DiaSemanaComponent;
   let fixture: ComponentFixture<DiaSemanaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DiaSemanaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DiaSemanaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});