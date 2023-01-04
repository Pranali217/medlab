import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailsCategoryComponent } from './view-product-details-category.component';

describe('ViewProductDetailsCategoryComponent', () => {
  let component: ViewProductDetailsCategoryComponent;
  let fixture: ComponentFixture<ViewProductDetailsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetailsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
