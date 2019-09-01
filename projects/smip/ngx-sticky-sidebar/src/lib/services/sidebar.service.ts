import {Inject, Injectable, Optional} from '@angular/core';
import {STICKY_SYDEBAR_CONFIG, StickySidebarConfig} from '../sidebar.interface';

const defaultConfig: StickySidebarConfig = {
  topSpacing: 0,
  bottomSpacing: 0,
  resizeSensor: true,
  containerSelector: '',
  innerWrapperSelector: '.inner-wrapper-sticky',
  stickyClass: 'is-affixed',
  minWidth: 0,
};

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  config: StickySidebarConfig;

  constructor(@Optional() @Inject(STICKY_SYDEBAR_CONFIG) config: StickySidebarConfig) {
    this.config = config ? {...defaultConfig, ...config} : defaultConfig;
  }
}
