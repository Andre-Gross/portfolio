import { Component, ElementRef, viewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

import { ContentService } from '../shared/services/content/content.service';
import { ScrollService } from '../shared/services/scroll/scroll.service';

import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';
import { SwitchArrowComponent } from '../shared/components/switch-arrow/switch-arrow.component';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-legal-notes',
  standalone: true,
  imports: [
    RouterLink,
    TopBarComponent,
    SwitchArrowComponent,
    Footer
],
  templateUrl: './legal-notes.html',
  styleUrl: './legal-notes.scss'
})
export class LegalNotes {

  readonly start = viewChild('start', { read: ElementRef });
  readonly scrollContainer = viewChild('scrollContainer', { read: ElementRef });
  readonly legalsPanelTwo = viewChild('legalsPanelTwo', { read: ElementRef });
  private scrollSub!: Subscription;


  constructor(private scrollService: ScrollService, public contentService: ContentService) { }


  ngOnInit() {
    this.scrollSub = this.scrollService.scrollRequest$.subscribe(sectionId => {
      const sectionMap: Record<string, ElementRef | undefined> = {
        'start': this.start(),
        'legalsPanelTwo': this.legalsPanelTwo(),

      };

      const target = sectionMap[sectionId];

      if (target) {
        this.scrollToElement(target);
      } else {
        console.warn(`Sektion mit der ID "${sectionId}" wurde nicht gefunden.`);
      }
    });
  }


  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }


  onWheel(event: WheelEvent): void {
    if (event.deltaY !== 0 && window.innerWidth > this.scrollService.breakpointTabletPortrait) {
      const element = event.currentTarget as HTMLElement;
      event.preventDefault();
      element.scrollLeft += 12 * event.deltaY;
    }
  }


  scrollToElement(element: any) {
    const target = element instanceof ElementRef ? element.nativeElement : element.nativeElement;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }


  triggerScroll(sectionId: string): void {
    const sectionMap: Record<string, ElementRef | undefined> = {
      'start': this.start(),
      'legalsPanelTwo': this.legalsPanelTwo(),
    };

    const target = sectionMap[sectionId];
    if (target) {
      this.scrollToElement(target);
    }
  }
}