import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {


  constructor(private scrollService: ScrollService) { }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }
}
