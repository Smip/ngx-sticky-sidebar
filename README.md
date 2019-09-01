# Ngx Sticky Sidebar

Angular library for making smart and high performance sticky sidebars.

Library based on [Pure JavaScript plugin Sticky Sidebar](https://github.com/abouolia/sticky-sidebar)

## [Demo](https://smip.github.io/ngx-sticky-sidebar/dist/ngx-sticky-sidebar)

## Installation

Run `npm install @smip/ngx-sticky-sidebar sticky-sidebar -S`

Add `NgxStickySidebarModule` import to your module: 

```
import { NgxStickySidebarModule } from '@smip/ngx-sticky-sidebar';

...

@NgModule({
  imports: [
    ...
    NgxStickySidebarModule
    ...
  ],
  ...
})
```

Highly recommend install [ResizeSensor.js](https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js) to use with `sticky-sidebar`.

More info [here](https://github.com/abouolia/sticky-sidebar#usage-with-resizesensorjs)

### Instalation ResizeSensor.js

`npm install css-element-queries -S`

Add `"./node_modules/css-element-queries/src/ResizeSensor.js"` to `angular.json` in section `scripts`.

## Usage

Add `stickySidebar` directive to element witch will be sticky

```
<div class="main-content">
    <div stickySidebar
          containerSelector=".main-content"
          innerWrapperSelector=".sidebar__inner">
        <div class="sidebar__inner">
            <!-- Content goes here -->
        </div>
    </div>
    <div class="content">
        <!-- Content goes here -->
    </div>
</div>
```

Note that inner sidebar wrapper `.sidebar__inner` is optional but highly recommended, if you don't write it yourself, the script will create one for you under class name inner-wrapper-sticky. but this may cause many problems.

### Options

All parameters are set through the corresponding attributes. For example:

```
<div
      stickySidebar
      containerSelector=".main-content"
      innerWrapperSelector=".sidebar__inner">
</div>
```

About options you could read [here](https://abouolia.github.io/sticky-sidebar/)

### Global options

Additionally you could set all or same parameters globally, via including module with method `withConfig`:

```
import { NgxStickySidebarModule } from '@smip/ngx-sticky-sidebar';

...
@NgModule({
  imports: [
    ...
    NgxStickySidebarModule.withConfig({
          minWidth: 992
          })
    ...
  ],
  ...
})
```

## Issues
If you have questions or issues feel free to create new an topic in [issues](https://github.com/Smip/ngx-sticky-sidebar/issues).

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
