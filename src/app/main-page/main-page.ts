import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, inject, viewChild, HostListener } from '@angular/core';
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
    readonly scrollContainer = viewChild('scrollContainer', { read: ElementRef });
    readonly landingPage = viewChild('landingPage', { read: ElementRef });
    readonly whyMe = viewChild('whyMe', { read: ElementRef });
    readonly mySkills = viewChild('mySkills', { read: ElementRef });
    readonly myWork = viewChild('myWork', { read: ElementRef });
    readonly references = viewChild('references', { read: ElementRef });
    readonly contactSection = viewChild('contactSection', { read: ElementRef });
    readonly endBlock = viewChild('endBlock', { read: ElementRef });

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
        setTimeout(() => this.updateActiveSection(), 400);

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


    onScroll(): void {
        this.updateActiveSection();
    }


    @HostListener('window:resize')
    onResize(): void {
        this.updateActiveSection();
    }


    private updateActiveSection(): void {
        const container = this.scrollContainer()?.nativeElement;
        if (!container) return;

        if (window.innerWidth <= this.scrollService.breakpointTabletPortrait) {
            this.scrollService.activeSection.set('');
            return;
        } else {
            const containerRect = container.getBoundingClientRect();

            const sections = [
                { id: 'landingPage', ref: this.landingPage() },
                { id: 'whyMe', ref: this.whyMe() },
                { id: 'mySkills', ref: this.mySkills() },
                { id: 'myWork', ref: this.myWork() },
                { id: 'references', ref: this.references() },
                { id: 'contactSection', ref: this.contactSection() },
                { id: 'endBlock', ref: this.endBlock() }
            ];

            const linkedSectionIds = ['whyMe', 'mySkills', 'myWork', 'contactSection'];

            const visibleSections = sections.filter(s => {
                if (!s.ref) return false;
                const rect = s.ref.nativeElement.getBoundingClientRect();
                return rect.right > containerRect.left && rect.left < containerRect.right;
            });

            const visibleLinkedSections = visibleSections.filter(s => linkedSectionIds.includes(s.id));

            const sectionWithVisibleBeginning = visibleLinkedSections.find(s => {
                const rect = s.ref!.nativeElement.getBoundingClientRect();
                return rect.left >= containerRect.left - 1 && rect.left < containerRect.right;
            });

            if (visibleLinkedSections.length === 0) {
                this.scrollService.activeSection.set('');
                return;
            } else if (visibleLinkedSections.length === 1) {
                this.scrollService.activeSection.set(visibleLinkedSections[0].id);
                return;
            } else if (sectionWithVisibleBeginning) {
                this.scrollService.activeSection.set(sectionWithVisibleBeginning.id);
            } else {
                this.scrollService.activeSection.set(visibleLinkedSections[0].id);
            }
        }
    }

    public scrollToElement(element: any) {
        const target = element instanceof ElementRef ? element.nativeElement : element;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }


    onScrollEnd(): void {
        if (window.innerWidth <= this.scrollService.breakpointTabletPortrait) return;

        const container = this.scrollContainer()?.nativeElement;
        if (!container) return;

        const containerLeft = container.getBoundingClientRect().left;

        const sections = [
            this.landingPage(),
            this.whyMe(),
            this.mySkills(),
            this.myWork(),
            this.references(),
            this.contactSection()
        ];

        const SNAP_THRESHOLD = 200;

        for (const sectionRef of sections) {
            if (!sectionRef) continue;

            const rect = sectionRef.nativeElement.getBoundingClientRect();
            const distanceToLeft = rect.left - containerLeft;

            if (Math.abs(distanceToLeft) > 1 && Math.abs(distanceToLeft) < SNAP_THRESHOLD) {
                this.scrollToElement(sectionRef);
                break;
            }
        }
    }


    onWheel(event: WheelEvent): void {
        if (event.deltaY !== 0 && window.innerWidth > this.scrollService.breakpointTabletPortrait) {
            const element = event.currentTarget as HTMLElement;
            
            element.scrollLeft += 6 * event.deltaY;
            event.preventDefault();
        }
    }
}