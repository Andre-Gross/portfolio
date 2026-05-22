import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ContentService } from '../../shared/services/content/content.service';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component'

@Component({
  selector: 'app-landing-page',
  imports: [
    TopBarComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

  @Output() newLang = new EventEmitter<string>()
  contentService = inject(ContentService);

}
