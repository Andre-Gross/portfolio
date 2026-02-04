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

    mainPageData = {
        en: {
            whyMe: {
                title: 'Why me',
                abouteMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
                iAm: 'I am',
                location: 'located in Berlin, Germany',
                remote: 'open to work remotly',
                relocate: 'open to relocate',
            }
        },
        de: {
            whyMe: {
                title: 'Warum mich',
                abouteMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
                iAm: 'Ich bin',
                location: 'Ich wohne in Berlin',
                remote: 'Ich bin offen für Home Office',
                relocate: 'Ich bin bereit für einen Umzug',
            }
        }
    }

    
    constructor() {
        if (navigator.language.startsWith('de')) {
            this.currentLang = 'de';
        } else {
            this.currentLang = 'en';
        }
    }


    setLang(lang: string) {
        this.currentLang = lang as 'en' | 'de';
        console.log("Language changed to: ", this.currentLang);
    }


    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0) {
            const element = event.currentTarget as HTMLElement;

            event.preventDefault();

            element.scrollLeft += 12 * event.deltaY;
        }
    }

}
