import { Component, Input } from '@angular/core';
import { SwitchArrowComponent } from '../switch-arrow/switch-arrow.component';

@Component({
  selector: 'app-section-title',
  imports: [SwitchArrowComponent],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {

    @Input() title: string = '';

}
