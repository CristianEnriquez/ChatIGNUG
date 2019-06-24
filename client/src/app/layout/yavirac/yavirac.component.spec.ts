import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaviracComponent } from './yavirac.component';

describe('YaviracComponent', () => {
  let component: YaviracComponent;
  let fixture: ComponentFixture<YaviracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaviracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaviracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
