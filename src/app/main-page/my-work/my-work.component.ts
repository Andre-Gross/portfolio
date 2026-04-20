import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProjectBoxComponent } from './project-box/project-box';

import { ContentService } from '../../shared/services/content/content.service';
import { ScrollService } from '../../shared/services/scroll/scroll.service';


@Component({
  selector: 'app-my-work',
  imports: [
        SectionTitleComponent,
        ProjectBoxComponent,
    ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkSection {

  constructor(private scrollService: ScrollService, public contentService: ContentService) { } 


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }
}
