import { Component, signal, inject } from '@angular/core';

import { ScrollService } from '../../services/scroll/scroll.service';
import { ContentService } from '../../services/content/content.service';

import { LangSwitchComponent } from '../lang-switch/lang-switch.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    LangSwitchComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  isMenuOpen = signal(false);
  public scrollService = inject(ScrollService);
  public contentService = inject(ContentService);


  setMenu(shallOpen?: boolean): void {
    if (shallOpen !== undefined) {
      this.isMenuOpen.set(shallOpen);
    } else {
      this.isMenuOpen.update(state => !state);
    }
  }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
    this.setMenu(false);
  }
}