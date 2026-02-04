import { Component } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';
import { UpperSectionComponent } from './upper-section/upper-section.component';

@Component({
  selector: 'app-project-box',
  imports: [
    HeadlineComponent,
    UpperSectionComponent
  ],
  templateUrl: './project-box.html',
  styleUrl: './project-box.scss',
})
export class ProjectBoxComponent {

}
