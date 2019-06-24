import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatspaceComponent } from './chatspace.component';

describe('ChatspaceComponent', () => {
  let component: ChatspaceComponent;
  let fixture: ComponentFixture<ChatspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
