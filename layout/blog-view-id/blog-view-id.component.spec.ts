import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogViewIdComponent } from './blog-view-id.component';

describe('BlogViewIdComponent', () => {
  let component: BlogViewIdComponent;
  let fixture: ComponentFixture<BlogViewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogViewIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogViewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
