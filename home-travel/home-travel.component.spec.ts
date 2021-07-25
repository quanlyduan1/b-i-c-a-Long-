import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTravelComponent } from './home-travel.component';

describe('HomeTravelComponent', () => {
  let component: HomeTravelComponent;
  let fixture: ComponentFixture<HomeTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
