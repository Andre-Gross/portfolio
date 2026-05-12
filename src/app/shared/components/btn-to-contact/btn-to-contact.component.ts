import { Component, inject, Input } from '@angular/core';

import { ScrollService } from '../../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-btn-to-contact',
  imports: [],
  templateUrl: './btn-to-contact.component.html',
  styleUrl: './btn-to-contact.component.scss',
})
export class BtnToContactComponent {
    @Input() text!: string;


  scrollService = inject(ScrollService);


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }

}
