import { TestBed } from '@angular/core/testing';

import { BlogModelService } from './blog-model.service';

describe('BlogModelService', () => {
  let service: BlogModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
