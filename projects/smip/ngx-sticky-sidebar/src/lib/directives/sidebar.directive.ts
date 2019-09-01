import {Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import StickySidebar from 'sticky-sidebar';
import {SidebarService} from '../services/sidebar.service';

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
  ) {
  }


  ngOnInit(): void {
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
