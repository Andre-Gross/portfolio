import { Component, Input } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';

@Component({
  selector: 'app-project-box',
  imports: [
    HeadlineComponent,
  ],
  templateUrl: './project-box.html',
  styleUrl: './project-box.scss',
})
export class ProjectBoxComponent {

  @Input() project!: any;
  @Input() index!: number

  goToLink(url: string, target: string = "_blank") {
    window.open(url, target);
  }

}
