import { Component, HostListener, inject, Inject, Input, OnInit } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';
import { ContentService } from '../../../shared/services/content/content.service';

@Component({
  selector: 'app-project-box',
  imports: [
    HeadlineComponent,
  ],
  templateUrl: './project-box.html',
  styleUrl: './project-box.scss',
})
export class ProjectBoxComponent implements OnInit {
  breakpointMobile: number = 799;
  screenWidth: number;
  shallShowMeMore: boolean = false;

  @Input() project!: any;
  @Input() index!: number;

  contentService = inject(ContentService);


  constructor() {
    this.screenWidth = window.innerWidth;
  }


  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }


  goToLink(url: string, target: string = "_blank") {
    window.open(url, target);
  }

}
