import {ModuleWithProviders, NgModule} from '@angular/core';
import {SidebarDirective} from './directives/sidebar.directive';
import {STICKY_SYDEBAR_CONFIG, StickySidebarConfig} from './sidebar.interface';


@NgModule({
  declarations: [SidebarDirective],
  imports: [
  ],
  exports: [SidebarDirective],
})
export class NgxStickySidebarModule {
  static withConfig(config: StickySidebarConfig): ModuleWithProviders {
    return {
      ngModule: NgxStickySidebarModule,
      providers: [
        {provide: STICKY_SYDEBAR_CONFIG, useValue: config},
      ],
    };
  }
}
