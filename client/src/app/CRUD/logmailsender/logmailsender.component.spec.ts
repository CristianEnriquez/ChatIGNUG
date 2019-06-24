import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogMailSenderComponent } from './logmailsender.component';

describe('LogMailSenderComponent', () => {
   let component: LogMailSenderComponent;
   let fixture: ComponentFixture<LogMailSenderComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ LogMailSenderComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(LogMailSenderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});