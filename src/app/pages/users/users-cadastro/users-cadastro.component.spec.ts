import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCadastroComponent } from './users-cadastro.component';

describe('UsersCadastroComponent', () => {
  let component: UsersCadastroComponent;
  let fixture: ComponentFixture<UsersCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
