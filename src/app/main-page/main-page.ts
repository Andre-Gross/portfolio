import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, inject, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, take } from 'rxjs';

import { ScrollService } from '../shared/services/scroll/scroll.service';

import { LandingPage } from "./landing-page/landing-page";
import { WhyMeSection } from "./why-me/why-me.component";
import { MySkillSetSection } from './my-skill-set/my-skill-set';
import { MyWorkSection } from './my-work/my-work.component';
import { ReferencesSection } from './references/references';
import { ContactSection } from './contact/contact.component';
import { EndBlock } from '../shared/components/end-block/end-block';


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
export class MainPage implements OnInit, OnDestroy, AfterViewInit {
    readonly landingPage = viewChild('landingPage', { read: ElementRef });
    readonly whyMe = viewChild('whyMe', { read: ElementRef });
    readonly mySkills = viewChild('mySkills', { read: ElementRef });
    readonly myWork = viewChild('myWork', { read: ElementRef });
    readonly references = viewChild('references', { read: ElementRef });
    readonly contactSection = viewChild('contactSection', { read: ElementRef });

    private route = inject(ActivatedRoute);
    private scrollService = inject(ScrollService);
    private scrollSub!: Subscription;


    ngOnInit() {
        this.scrollSub = this.scrollService.scrollRequest$.subscribe(sectionId => {
            const sectionMap: Record<string, ElementRef | undefined> = {
                'landingPage': this.landingPage(),
                'whyMe': this.whyMe(),
                'mySkills': this.mySkills(),
                'myWork': this.myWork(),
                'references': this.references(),
                'contactSection': this.contactSection()
            };

            const target = sectionMap[sectionId];

            if (target) {
                this.scrollToElement(target);
            } else {
                console.warn(`Sektion mit der ID "${sectionId}" wurde nicht gefunden.`);
            }
        });
    }


    ngAfterViewInit() {
        this.route.fragment.pipe(take(1)).subscribe((fragment) => {
            if (fragment) {
                setTimeout(() => {
                    this.scrollService.requestScroll(fragment);
                }, 300);
            }
        });
    }


    ngOnDestroy() {
        this.scrollSub?.unsubscribe();
    }


    public scrollToElement(element: any) {
        const target = element instanceof ElementRef ? element.nativeElement : element;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }


    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0) {
            const element = event.currentTarget as HTMLElement;
            element.scrollLeft += 12 * event.deltaY;
        }
    }
}