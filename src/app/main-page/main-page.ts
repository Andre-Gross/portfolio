import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from '../shared/services/scroll/scroll.service';

import { LandingPage } from "./landing-page/landing-page";
import { WhyMeSection } from "./why-me/why-me.component";
import { MySkillSetSection } from './my-skill-set/my-skill-set';
import { MyWorkSection } from './my-work/my-work.component';
import { ReferencesSection } from './references/references';
import { ContactSection } from './contact/contact.component';
import { EndBlock } from './end-block/end-block';

@Component({
    selector: 'app-main-page',
    imports: [
        LandingPage,
        WhyMeSection,
        MySkillSetSection,
        MyWorkSection,
        ReferencesSection,
        ContactSection,
        EndBlock,
    ],
    templateUrl: './main-page.html',
    styleUrl: './main-page.scss',
})
export class MainPage implements OnInit, OnDestroy {

@ViewChild('whyMe', { read: ElementRef }) whyMe!: ElementRef;
    @ViewChild('mySkills', { read: ElementRef }) mySkills!: ElementRef;
    @ViewChild('myWork', { read: ElementRef }) myWork!: ElementRef;
    @ViewChild('contactSection', { read: ElementRef }) contactSection!: ElementRef;


    private scrollSub!: Subscription;


    constructor(private scrollService: ScrollService) { }


    ngOnInit() {
        this.scrollSub = this.scrollService.scrollRequest$.subscribe(sectionId => {
            const sectionMap: { [key: string]: ElementRef } = {
                'whyMe': this.whyMe,
                'mySkills': this.mySkills,
                'myWork': this.myWork,
                'contactSection': this.contactSection
            };

            const target = sectionMap[sectionId];

            if (target) {
                this.scrollToElement(target);
            } else {
                console.warn(`Sektion mit der ID "${sectionId}" wurde nicht gefunden.`);
            }
        });
    }


    ngOnDestroy() {
        if (this.scrollSub) {
            this.scrollSub.unsubscribe();
        }
    }


    private scrollToElement(element: ElementRef) {
        const target = element.nativeElement as HTMLElement;
        const container = target.parentElement;

        if (container) {
            container.scrollTo({
                left: target.offsetLeft,
                behavior: 'smooth'
            });
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