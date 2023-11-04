import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegistrationComponent } from './users-registration.component';

describe('UsersRegistrationComponent', () => {
  let component: UsersRegistrationComponent;
  let fixture: ComponentFixture<UsersRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRegistrationComponent]
    });
    fixture = TestBed.createComponent(UsersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
