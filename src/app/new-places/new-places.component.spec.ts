import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlacesComponent } from './new-places.component';

describe('NewPlacesComponent', () => {
  let component: NewPlacesComponent;
  let fixture: ComponentFixture<NewPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
