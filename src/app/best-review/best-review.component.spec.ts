import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestReviewComponent } from './best-review.component';

describe('BestReviewComponent', () => {
  let component: BestReviewComponent;
  let fixture: ComponentFixture<BestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
