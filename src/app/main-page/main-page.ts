import { Component } from '@angular/core';
import { LandingPage } from "./landing-page/landing-page";
import { SwitchSectionArea } from "../shared/switch-section-area/switch-section-area";
import { WhyMeSection } from "./why-me/why-me.component";
import { MyWorkSection } from './my-work/my-work.component';


@Component({
    selector: 'app-main-page',
    imports: [
        LandingPage,
        SwitchSectionArea,
        WhyMeSection,
        MyWorkSection,
    ],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage {

    currentLang: 'en' | 'de' = 'en';

    
    constructor() {
        if (navigator.language.startsWith('de')) {
            this.currentLang = 'de';
        } else {
            this.currentLang = 'en';
        }
    }

    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0) {
            const element = event.currentTarget as HTMLElement;

            event.preventDefault();

            element.scrollLeft += 12 * event.deltaY;
        }
    }

}
