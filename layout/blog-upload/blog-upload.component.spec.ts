import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUploadComponent } from './blog-upload.component';

describe('BlogUploadComponent', () => {
  let component: BlogUploadComponent;
  let fixture: ComponentFixture<BlogUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
