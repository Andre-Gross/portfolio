import { Component } from '@angular/core';
import { ProjectBoxParagraphComponent } from '../project-box-paragraph/project-box-paragraph.component';

@Component({
  selector: 'app-upper-section',
  imports: [
    ProjectBoxParagraphComponent,
  ],
  templateUrl: './upper-section.component.html',
  styleUrl: './upper-section.component.scss',
})
export class UpperSectionComponent {

}
