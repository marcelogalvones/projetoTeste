import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosContentComponent } from './produtos-content.component';

describe('ProdutosContentComponent', () => {
  let component: ProdutosContentComponent;
  let fixture: ComponentFixture<ProdutosContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
