import { Component, ViewChild, ElementRef, OnInit, OnDestroy, WritableSignal, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from '../shared/services/scroll/scroll.service';

import { SwitchSectionArea } from "../shared/components/switch-section-area/switch-section-area";
import { LandingPage } from "./landing-page/landing-page";
import { WhyMeSection } from "./why-me/why-me.component";
import { MyWorkSection } from './my-work/my-work.component';
import { ContactSection } from './contact/contact.component';

@Component({
    selector: 'app-main-page',
    imports: [
        SwitchSectionArea,
        LandingPage,
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

    currentLang: WritableSignal<'en' | 'de'> = signal('de');

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
            },
            myWork: {
                title: 'My work',
                projects: [
                    {
                        key: 'project1',
                        name: 'Project Join',
                        img: {
                            imgPath: 'img/my-work/join.png',
                            btn1: {
                                text: 'GitHub',
                                link: 'https://github.com/Andre-Gross/join',
                            },
                            btn2: {
                                text: 'Live Test',
                                link: ''
                            }
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'Angular, TypeScript, HTML, CSS, Firebase',
                        },
                        paragraph3: {
                            header: 'My group-projects experience',
                            content: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
                        }
                    },
                    {
                        key: 'project2',
                        name: 'Project Pollo Loco',
                        img: {
                            imgPath: 'img/my-work/pollo-loco.png',
                            btn1: 'GitHub',
                            btn2: 'Live Test',
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'JavaScript, HTML, CSS',
                        },
                        paragraph3: {
                            header: 'What I have learned',
                            content: 'Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?',
                        }
                    },
                    {
                        key: 'project3',
                        name: 'Project DA Bubble',
                        img: {
                            imgPath: 'img/my-work/da-bubble.png',
                            btn1: 'GitHub',
                            btn2: 'Live Test',
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Posuere pretium arcu sed senectus felis ac mauris. Dui eget dictum. Posuere pretium arcu sed senectus felis ac mauris.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'JavaScript, HTML, CSS',
                        },
                        paragraph3: {
                            header: 'My group-projects experience',
                            content: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
                        }
                    }
                ]
            },
            contact: {
                title: 'Contact',
                name: 'Your name',
                email: 'Your e-mail',
                message: 'Your message',
                privacy: {
                    text1: "I've read the ",
                    link: 'privacy policy',
                    text2: ' and agree to the processing of my data as outlined.',
                },
                submit: 'Send',
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
            },
            myWork: {
                title: 'My work',
                projects: [
                    {
                        key: 'project1',
                        name: 'Project Join',
                        img: {
                            imgPath: 'img/my-work/join.png',
                            btn1: {
                                text: 'GitHub',
                                link: 'https://github.com/Andre-Gross/join',
                            },
                            btn2: {
                                text: 'Live Test',
                                link: ''
                            }
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'Angular, TypeScript, HTML, CSS, Firebase',
                        },
                        paragraph3: {
                            header: 'My group-projects experience',
                            content: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
                        }
                    },
                    {
                        key: 'project2',
                        name: 'Project Pollo Loco',
                        img: {
                            imgPath: 'img/my-work/pollo-loco.png',
                            btn1: 'GitHub',
                            btn2: 'Live Test',
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'JavaScript, HTML, CSS',
                        },
                        paragraph3: {
                            header: 'What I have learned',
                            content: 'Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?',
                        }
                    },
                    {
                        key: 'project3',
                        name: 'Project DA Bubble',
                        img: {
                            imgPath: 'img/my-work/da-bubble.png',
                            btn1: 'GitHub',
                            btn2: 'Live Test',
                        },
                        paragraph1: {
                            header: 'About the project',
                            content: 'Posuere pretium arcu sed senectus felis ac mauris. Dui eget dictum. Posuere pretium arcu sed senectus felis ac mauris.',
                        },
                        paragraph2: {
                            header: 'Technologies I have used',
                            content: 'JavaScript, HTML, CSS',
                        },
                        paragraph3: {
                            header: 'My group-projects experience',
                            content: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
                        }
                    }
                ]
            },
            contact: {
                title: 'Kontakt',
                name: 'Ihr Name',
                email: 'Ihre E-Mail-Adresse',
                message: 'Ihre Nachricht',
                privacy: {
                    text1: 'Ich habe die ',
                    link: 'Datenschutzerklärung',
                    text2: ' und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
                },
                submit: 'Senden',
            }
        }
    }


    constructor(private scrollService: ScrollService) {
        if (navigator.language.startsWith('de')) {
            this.currentLang.update(() => 'de');
        } else {
            this.currentLang.update(() => 'en');
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
        this.currentLang.update(() => lang as 'en' | 'de');
        console.log("Language changed to: ", this.currentLang);
    }
}