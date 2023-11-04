import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDashboardComponent } from './loan-dashboard.component';

describe('LoanDashboardComponent', () => {
  let component: LoanDashboardComponent;
  let fixture: ComponentFixture<LoanDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDashboardComponent]
    });
    fixture = TestBed.createComponent(LoanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
