import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from '../shared/services/scroll/scroll.service';

import { LandingPage } from "./landing-page/landing-page";
import { WhyMeSection } from "./why-me/why-me.component";
import { MySkillSetSection } from './my-skill-set/my-skill-set';
import { MyWorkSection } from './my-work/my-work.component';
import { ReferencesSection } from './references/references';
import { ContactSection } from './contact/contact.component';

@Component({
    selector: 'app-main-page',
    imports: [
        LandingPage,
        WhyMeSection,
        MySkillSetSection,
        MyWorkSection,
        ReferencesSection,
        ContactSection,
    ],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage implements OnInit, OnDestroy {

    @ViewChild('contactSection', { read: ElementRef }) contactSection!: ElementRef;

    private scrollSub!: Subscription;


    constructor(private scrollService: ScrollService) { }


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
}