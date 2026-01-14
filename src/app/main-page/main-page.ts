import { Component } from '@angular/core';
import { LandingPage } from "./landing-page/landing-page";
import { SwitchSectionArea } from "../shared/switch-section-area/switch-section-area";
import { SectionTitleComponent } from './section-title/section-title.component';

@Component({
    selector: 'app-main-page',
    imports: [
        LandingPage,
        SwitchSectionArea,
        SectionTitleComponent,
    ],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage {


    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0) {
            const element = event.currentTarget as HTMLElement;

            event.preventDefault();

            element.scrollLeft += 12 * event.deltaY;
        }
    }

}
