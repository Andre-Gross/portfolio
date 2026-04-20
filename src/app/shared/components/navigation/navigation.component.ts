import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  
  constructor(private scrollService: ScrollService) { }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }
}
