import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStickySidebarComponent } from './ngx-sticky-sidebar.component';

describe('NgxStickySidebarComponent', () => {
  let component: NgxStickySidebarComponent;
  let fixture: ComponentFixture<NgxStickySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStickySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStickySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
