import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSlideComponent } from './services-slide.component';

describe('ServicesSlideComponent', () => {
  let component: ServicesSlideComponent;
  let fixture: ComponentFixture<ServicesSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
