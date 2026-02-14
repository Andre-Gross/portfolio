import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from '../shared/services/scroll/scroll.service';
import { LandingPage } from "./landing-page/landing-page";
import { SwitchSectionArea } from "../shared/components/switch-section-area/switch-section-area";
import { WhyMeSection } from "./why-me/why-me.component";
import { MyWorkSection } from './my-work/my-work.component';
import { ContactSection } from './contact/contact.component';

@Component({
    selector: 'app-main-page',
    imports: [
        LandingPage,
        SwitchSectionArea,
        WhyMeSection,
        MyWorkSection,
        ContactSection,
    ],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage implements OnInit, OnDestroy {

    @ViewChild('contactSection', { read: ElementRef }) contactSection!: ElementRef;

    private scrollSub!: Subscription;

    currentLang: 'en' | 'de' = 'de';

    mainPageData = {
        en: {
            whyMe: {
                title: 'Why me',
                aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
                iAm: 'I am',
                singleArguments: {
                    location: 'located in Berlin, Germany',
                    remote: 'open to work remotly',
                    relocate: 'open to relocate',
                }
            }
        },
        de: {
            whyMe: {
                title: 'Warum mich',
                aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
                iAm: 'Ich',
                singleArguments: {
                    location: 'wohne in Berlin',
                    remote: 'bin offen für Home Office',
                    relocate: 'bin bereit für einen Umzug',
                }
            }
        }
    }


    constructor(private scrollService: ScrollService) {
        if (navigator.language.startsWith('de')) {
            this.currentLang = 'de';
        } else {
            this.currentLang = 'en';
        }
    }


    ngOnInit() {
        this.scrollSub = this.scrollService.scrollRequest$.subscribe(sectionId => {
            if (sectionId === 'contactSection') {
                this.scrollToElement(this.contactSection);
            }
        });
    }


    ngOnDestroy() {
        this.scrollSub.unsubscribe();
    }


    private scrollToElement(element: ElementRef) {
        element.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }


    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0) {
            const element = event.currentTarget as HTMLElement;
            event.preventDefault();
            element.scrollLeft += 12 * event.deltaY;
        }
    }


    setLang(lang: string) {
        this.currentLang = lang as 'en' | 'de';
        console.log("Language changed to: ", this.currentLang);
    }
}