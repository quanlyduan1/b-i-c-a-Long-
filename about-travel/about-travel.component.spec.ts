import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTravelComponent } from './about-travel.component';

describe('AboutTravelComponent', () => {
  let component: AboutTravelComponent;
  let fixture: ComponentFixture<AboutTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
