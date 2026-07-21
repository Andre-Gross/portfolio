import { Component, ElementRef, inject, viewChild, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContentService } from '../shared/services/content/content.service';

import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';
import { ContactLinksComponent } from "../shared/components/contact-links/contact-links.component";
import { SwitchArrowComponent } from '../shared/components/switch-arrow/switch-arrow.component';
import { EndBlock } from '../shared/components/end-block/end-block';
import { ScrollService } from '../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    RouterLink,
    TopBarComponent,
    SwitchArrowComponent,
    EndBlock,
    ContactLinksComponent
  ],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {

  readonly scrollContainer = viewChild('scrollContainer', { read: ElementRef });
  private isScrolling = false;
  private scrollService = inject(ScrollService);
  readonly columns = viewChildren<ElementRef<HTMLElement>>('col');


  constructor(public contentService: ContentService) { }


  onWheel(event: WheelEvent): void {
    const navigationWidth = 172;

    if (window.innerWidth <= this.scrollService.breakpointTabletPortrait) return;

    event.preventDefault();

    if (this.isScrolling) return;

    const container = this.scrollContainer()?.nativeElement;
    if (!container) return;

    this.isScrolling = true;

    const scrollAmount = window.innerWidth - navigationWidth;

    if (event.deltaY > 0) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }


  public scrollToElement(targetIndex: number): void {

    const targetElement = this.columns()[targetIndex]?.nativeElement;

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  
  triggerScrollToStart(): void {
    const container = this.scrollContainer()?.nativeElement;
    if (container) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}