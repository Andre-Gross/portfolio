import { Component } from '@angular/core';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ContentService } from '../../shared/services/content/content.service';


@Component({
  selector: 'app-references',
  imports: [SectionTitleComponent],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesSection {

  constructor(public contentService: ContentService) { }

}
