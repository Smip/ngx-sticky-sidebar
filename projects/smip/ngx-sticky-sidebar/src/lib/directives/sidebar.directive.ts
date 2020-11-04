import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Subject} from 'rxjs';

@Directive({
  selector: '[stickySidebar]',
})
export class SidebarDirective implements OnInit, OnDestroy {
  @Input() topSpacing: number | string = this.sidebarConfig.config.topSpacing;
  @Input() bottomSpacing: number | string = this.sidebarConfig.config.bottomSpacing;
  @Input() resizeSensor: boolean = this.sidebarConfig.config.resizeSensor;
  @Input() containerSelector: string = this.sidebarConfig.config.containerSelector;
  @Input() innerWrapperSelector: string = this.sidebarConfig.config.innerWrapperSelector;
  @Input() stickyClass: string = this.sidebarConfig.config.stickyClass;
  @Input() minWidth: number | string = this.sidebarConfig.config.minWidth;

  @Input() updateSticky: Subject<boolean>;

  @Output() stickySidebarAffixTop: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixedTop: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixBottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixedBottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixContainerBottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixedContainerBottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixUnbottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixedUnbottom: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixStatic: EventEmitter<{}> = new EventEmitter();
  @Output() stickySidebarAffixedStatic: EventEmitter<{}> = new EventEmitter();
  stickySidebar: any;

  constructor(
    private element: ElementRef,
    private sidebarConfig: SidebarService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('sticky-sidebar').then((module) => {
        const StickySidebar = module.default;

        this.stickySidebar = new StickySidebar(this.element.nativeElement,
              {
                topSpacing: +this.topSpacing,
                bottomSpacing: +this.bottomSpacing,
                containerSelector: this.containerSelector,
                innerWrapperSelector: this.innerWrapperSelector,
                resizeSensor: this.resizeSensor,
                stickyClass: this.stickyClass,
                minWidth: +this.minWidth,
              },
            );

        if (this.updateSticky) {
          this.updateSticky.subscribe(() => {
            this.stickySidebar.updateSticky();
          });
        }
      })
    }
  }

  @HostListener('affix.top.stickySidebar') onStickySidebarAffixTop() {
    this.stickySidebarAffixTop.emit();
  }

  @HostListener('affixed.top.stickySidebar') onStickySidebarAffixedTop() {
    this.stickySidebarAffixedTop.emit();
  }

  @HostListener('affix.bottom.stickySidebar') onStickySidebarAffixBottom() {
    this.stickySidebarAffixBottom.emit();
  }

  @HostListener('affixed.bottom.stickySidebar') onStickySidebarAffixedBottom() {
    this.stickySidebarAffixedBottom.emit();
  }

  @HostListener('affix.container-bottom.stickySidebar') onStickySidebarAffixContainerBottom() {
    this.stickySidebarAffixContainerBottom.emit();
  }

  @HostListener('affixed.container-bottom.stickySidebar') onStickySidebarAffixedContainerBottom() {
    this.stickySidebarAffixedContainerBottom.emit();
  }

  @HostListener('affix.unbottom.stickySidebar') onStickySidebarAffixUnbottom() {
    this.stickySidebarAffixUnbottom.emit();
  }

  @HostListener('affixed.unbottom.stickySidebar') onStickySidebarAffixedUnbottom() {
    this.stickySidebarAffixedUnbottom.emit();
  }

  @HostListener('affix.static.stickySidebar') onStickySidebarAffixStatic() {
    this.stickySidebarAffixStatic.emit();
  }

  @HostListener('affixed.static.stickySidebar') onStickySidebarAffixedStatic() {
    this.stickySidebarAffixedStatic.emit();
  }

  ngOnDestroy(): void {
    if (this.stickySidebar) {
      this.stickySidebar.destroy();
    }
  }

}
