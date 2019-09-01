import {InjectionToken} from '@angular/core';

export interface StickySidebarConfig {
  topSpacing?: number | string;
  bottomSpacing?: number | string;
  resizeSensor?: boolean;
  containerSelector?: string;
  innerWrapperSelector?: string;
  stickyClass?: string;
  minWidth?: number | string;
}

export const STICKY_SYDEBAR_CONFIG = new InjectionToken<StickySidebarConfig>('stickySidebarConfig');
