import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTestsComponent } from './ui-tests.component';

describe('UiTestsComponent', () => {
  let component: UiTestsComponent;
  let fixture: ComponentFixture<UiTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
