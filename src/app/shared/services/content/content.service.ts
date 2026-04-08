import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {


  currentLang: WritableSignal<'en' | 'de'> = signal('de');


  mainPageData = {
    whyMe: {
      title: {
        en: 'Why me',
        de: 'Warum mich',
      },
      aboutMe: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
        de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
      },
      iAm: {
        en: 'I am',
        de: 'Ich',
      },
      singleArguments: {
        location: {
          en: 'located in Berlin, Germany',
          de: 'wohne in Berlin',
        },
        remote: {
          en: 'open to work remotly',
          de: 'bin offen für Home Office',
        },
        relocate: {
          en: 'open to relocate',
          de: 'bin bereit für einen Umzug',
        },
      },
    },
    myWork: {
      title: {
        en: 'My work',
        de: 'Meine Projekte',
      },
      projects: [
        {
          key: 'project1',
          name: 'Project Join',
          img: {
            imgPath: 'img/my-work/join.png',
            btn1: { text: 'GitHub', link: 'https://github.com/Andre-Gross/join' },
            btn2: { text: 'Live Test', link: '' },
          },
          paragraph1: {
            header: {
              en: 'About the project',
              de: 'Über das Projekt',
            },
            content: {
              en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
              de: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
            },
          },
          paragraph2: {
            header: {
              en: 'Technologies I have used',
              de: 'Verwendete Technologien',
            },
            content: 'Angular, TypeScript, HTML, CSS, Firebase',
          },
          paragraph3: {
            header: {
              en: 'My group-projects experience',
              de: 'Meine Erfahrung mit Gruppenprojekten',
            },
            content: {
              en: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
              de: 'Wie viele Personen waren im Team und welche Rolle hattest du? Beschreibe deine Aufgaben in 1-2 Sätzen. Erwähne ruhig eine gute Zusammenarbeit im Team.',
            },
          },
        },
        {
          key: 'project2',
          name: 'Project Pollo Loco',
          img: {
            imgPath: 'img/my-work/el-pollo-loco.png',
            btn1: { text: 'GitHub', link: 'https://github.com/Andre-Gross/join' },
            btn2: { text: 'Live Test', link: '' },
          },
          paragraph1: {
            header: {
              en: 'About the project',
              de: 'Über das Projekt',
            },
            content: {
              en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
              de: 'Spring-, Lauf- und Wurfspiel auf Basis eines objektorientierten Ansatzes. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
            },
          },
          paragraph2: {
            header: {
              en: 'Technologies I have used',
              de: 'Verwendete Technologien',
            },
            content: 'JavaScript, HTML, CSS',
          },
          paragraph3: {
            header: {
              en: 'What I have learned',
              de: 'Was ich gelernt habe',
            },
            content: {
              en: 'Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?',
              de: 'Hast du eine bestimmte Technologie zum ersten Mal eingesetzt? Hast du mehr darüber gelernt, wie du deinen Code sauber hältst oder deine Projektkomponenten strukturierst?',
            },
          },
        },
        // {
        //     key: 'project3',
        //     name: 'Project DA Bubble',
        //     img: {
        //         imgPath: 'img/my-work/da-bubble.png',
        //         btn1: { text: 'GitHub',    link: 'https://github.com/Andre-Gross/join' },
        //         btn2: { text: 'Live Test', link: '' },
        //     },
        //     paragraph1: {
        //         header:  { en: 'About the project',        de: 'Über das Projekt' },
        //         content: { en: 'Posuere pretium arcu sed senectus felis ac mauris. Dui eget dictum. Posuere pretium arcu sed senectus felis ac mauris.', de: '...' },
        //     },
        //     paragraph2: {
        //         header:  { en: 'Technologies I have used', de: 'Verwendete Technologien' },
        //         content: 'JavaScript, HTML, CSS',
        //     },
        //     paragraph3: {
        //         header:  { en: 'My group-projects experience', de: 'Meine Erfahrung mit Gruppenprojekten' },
        //         content: { en: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences.', de: '...' },
        //     },
        // },
      ],
    },
    contact: {
      title: {
        en: 'Contact',
        de: 'Kontakt',
      },
      name: {
        en: 'Your name',
        de: 'Ihr Name',
      },
      email: {
        en: 'Your e-mail',
        de: 'Ihre E-Mail-Adresse',
      },
      message: {
        en: 'Your message',
        de: 'Ihre Nachricht',
      },
      privacy: {
        text1: {
          en: "I've read the ",
          de: 'Ich habe die ',
        },
        link: {
          en: 'privacy policy',
          de: 'Datenschutzerklärung',
        },
        text2: {
          en: ' and agree to the processing of my data as outlined.',
          de: ' und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        },
      },
      submit: {
        en: 'Send',
        de: 'Senden',
      },
    },
  }


  setLang(lang: string) {
    this.currentLang.update(() => lang as 'en' | 'de');
    console.log("Language changed to: ", this.currentLang());
  }
}
