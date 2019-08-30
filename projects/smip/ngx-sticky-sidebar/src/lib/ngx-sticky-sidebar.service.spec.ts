import { TestBed } from '@angular/core/testing';

import { NgxStickySidebarService } from './ngx-sticky-sidebar.service';

describe('NgxStickySidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStickySidebarService = TestBed.get(NgxStickySidebarService);
    expect(service).toBeTruthy();
  });
});
