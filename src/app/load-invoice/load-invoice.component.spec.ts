import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadInvoiceComponent } from './load-invoice.component';

describe('LoadInvoiceComponent', () => {
  let component: LoadInvoiceComponent;
  let fixture: ComponentFixture<LoadInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
