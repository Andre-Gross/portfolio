import { Component, ElementRef, viewChild } from '@angular/core';

import { ContentService } from '../shared/services/content/content.service';
import { ScrollService } from '../shared/services/scroll/scroll.service';

import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';
import { SwitchArrowComponent } from '../shared/components/switch-arrow/switch-arrow.component';
import { EndBlock } from '../shared/components/end-block/end-block';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notes',
  standalone: true,
  imports: [
    TopBarComponent,
    SwitchArrowComponent,
    EndBlock
  ],
  templateUrl: './legal-notes.html',
  styleUrl: './legal-notes.scss'
})
export class LegalNotes {

  readonly start = viewChild('start', { read: ElementRef });
  readonly secondColumn = viewChild('secondColumn', { read: ElementRef });
  private scrollSub!: Subscription;


  constructor(private scrollService: ScrollService, public contentService: ContentService) { }


  ngOnInit() {
    this.scrollSub = this.scrollService.scrollRequest$.subscribe(sectionId => {
      const sectionMap: Record<string, ElementRef | undefined> = {
        'start': this.start(),
        'secondColumn': this.secondColumn(),

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
    if (event.deltaY !== 0) {
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
      'secondColumn': this.secondColumn(),
    };

    const target = sectionMap[sectionId];
    if (target) {
      this.scrollToElement(target);
    }
  }
}