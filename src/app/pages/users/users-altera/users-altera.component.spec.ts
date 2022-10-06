import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAlteraComponent } from './users-altera.component';

describe('UsersAlteraComponent', () => {
  let component: UsersAlteraComponent;
  let fixture: ComponentFixture<UsersAlteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAlteraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
