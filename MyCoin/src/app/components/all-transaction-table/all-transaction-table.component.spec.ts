import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransactionTableComponent } from './all-transaction-table.component';

describe('AllTransactionTableComponent', () => {
  let component: AllTransactionTableComponent;
  let fixture: ComponentFixture<AllTransactionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransactionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
