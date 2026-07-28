import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContentService } from '../../services/content/content.service';
import { ScrollService } from '../../services/scroll/scroll.service';

import { ContactLinksComponent } from '../contact-links/contact-links.component';
import { EndBlock } from '../end-block/end-block';


@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    ContactLinksComponent,
    EndBlock
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() scrollContainer!: HTMLDivElement;

  contentService = inject(ContentService);
  scrollService = inject(ScrollService);


  triggerScrollToStart(): void {
    const container = this.scrollContainer;
    if (container) {
      container.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  }
}
