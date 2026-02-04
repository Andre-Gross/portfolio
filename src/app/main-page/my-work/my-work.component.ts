import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ProjectBoxComponent } from './project-box/project-box';


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

}
