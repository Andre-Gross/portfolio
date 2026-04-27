import { Component } from '@angular/core';

import { ContentService } from '../../shared/services/content/content.service';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';


@Component({
  selector: 'app-references',
  imports: [SectionTitleComponent],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesSection {

  constructor(public contentService: ContentService, private scrollService: ScrollService) { }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }

}
