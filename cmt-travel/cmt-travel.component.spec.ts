import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtTravelComponent } from './cmt-travel.component';

describe('CmtTravelComponent', () => {
  let component: CmtTravelComponent;
  let fixture: ComponentFixture<CmtTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmtTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
