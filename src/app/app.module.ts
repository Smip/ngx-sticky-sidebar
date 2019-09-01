import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxStickySidebarModule} from '@smip/ngx-sticky-sidebar';
import {MainComponent} from './main/main.component';
import {NgxMaterialize} from '@smip/ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStickySidebarModule.withConfig({
      minWidth: 992,
    }),
    NgxMaterialize,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
