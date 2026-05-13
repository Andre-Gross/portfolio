import { Component } from '@angular/core';

import { ContentService } from '../../shared/services/content/content.service';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { BtnToContactComponent } from '../../shared/components/btn-to-contact/btn-to-contact.component';


@Component({
  selector: 'app-my-skill-set',
  imports: [
    SectionTitleComponent,
    BtnToContactComponent
  ],
  templateUrl: './my-skill-set.html',
  styleUrl: './my-skill-set.scss',
})
export class MySkillSetSection {

  constructor(public contentService: ContentService, private scrollService: ScrollService) { }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }

}