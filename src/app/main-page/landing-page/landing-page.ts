import { Component, Output, EventEmitter } from '@angular/core';
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
}
