import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucceedComponent } from './login-succeed.component';

describe('LoginSucceedComponent', () => {
  let component: LoginSucceedComponent;
  let fixture: ComponentFixture<LoginSucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSucceedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
