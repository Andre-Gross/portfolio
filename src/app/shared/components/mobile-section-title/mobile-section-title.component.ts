import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-section-title',
  imports: [],
  templateUrl: './mobile-section-title.component.html',
  styleUrl: './mobile-section-title.component.scss',
})
export class MobileSectionTitleComponent {

  @Input() text?: string
}
