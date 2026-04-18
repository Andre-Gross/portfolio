import { Component } from '@angular/core';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ContentService } from '../../shared/services/content/content.service';

@Component({
  selector: 'app-my-skill-set',
  imports: [SectionTitleComponent],
  templateUrl: './my-skill-set.html',
  styleUrl: './my-skill-set.scss',
})
export class MySkillSetSection {

  constructor(public contentService: ContentService) { }

}