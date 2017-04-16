import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRowsComponent } from './empty-rows.component';

describe('EmptyRowsComponent', () => {
  let component: EmptyRowsComponent;
  let fixture: ComponentFixture<EmptyRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
