import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recommendedproducts } from './recommendedproducts';

describe('Recommendedproducts', () => {
  let component: Recommendedproducts;
  let fixture: ComponentFixture<Recommendedproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recommendedproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recommendedproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
