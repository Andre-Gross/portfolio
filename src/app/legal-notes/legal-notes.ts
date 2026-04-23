import { Component } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';
import { ScrollService } from '../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-legal-notes',
  standalone: true,
  imports: [],
  templateUrl: './legal-notes.html',
  styleUrl: './legal-notes.scss'
})
export class LegalNotes {


  constructor(private scrollService: ScrollService, public contentService: ContentService) { }


  onWheel(event: WheelEvent): void {
    if (event.deltaY !== 0) {
      const element = event.currentTarget as HTMLElement;
      event.preventDefault();
      element.scrollLeft += 12 * event.deltaY;
    }
  }
}