import { Component } from '@angular/core';
import { LandingPage } from "./landing-page/landing-page";
import { SwitchSectionArea } from "../shared/switch-section-area/switch-section-area";

@Component({
  selector: 'app-main-page',
  imports: [
    LandingPage,
    SwitchSectionArea
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
