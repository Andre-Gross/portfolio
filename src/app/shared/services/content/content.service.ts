import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {


  currentLang: WritableSignal<'en' | 'de'> = signal('de');


  mainPageData = signal({
    general: {
      email: 'andre.p.gross@proton.me',
      tel: '+49 152 046 344 94'
    },
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
    mySkillSet: {
      title: {
        en: 'My Skill Set',
        de: 'Fähigkeiten',
      },
      skillText: {
        en: 'A short introduction of your skills. Highlight your experience of working on different projects using different front-end technologies and emphasise your openness to learning and adapting to new technologies.',
        de: 'A short introduction of your skills. Highlight your experience of working on different projects using different front-end technologies and emphasise your openness to learning and adapting to new technologies.',
      },
      skills: [
        {
          imgPath: 'img/my-skill-set/angular.svg',
          skillName: 'Angular',
        },
        {
          imgPath: 'img/my-skill-set/typescript.svg',
          skillName: 'TypeScript',
        },
        {
          imgPath: 'img/my-skill-set/javascript.svg',
          skillName: 'JavaScript',
        },
        {
          imgPath: 'img/my-skill-set/html.svg',
          skillName: 'HTML',
        },
        {
          imgPath: 'img/my-skill-set/css.svg',
          skillName: 'CSS',
        },
        {
          imgPath: 'img/my-skill-set/api.svg',
          skillName: 'REST-API',
        },
        {
          imgPath: 'img/my-skill-set/supabase.svg',
          skillName: 'Supabase',
        },
        {
          imgPath: 'img/my-skill-set/git.svg',
          skillName: 'Git',
        },
        {
          imgPath: 'img/my-skill-set/scrum.svg',
          skillName: 'Scrum',
        },
        {
          imgPath: 'img/my-skill-set/materialDesign.svg',
          skillName: 'Material design',
        },
        {
          imgPath: 'img/my-skill-set/challengeMe.svg',
          skillName: {
            en: 'Challenge me',
            de: 'Challenge me',
          },
        },
      ],
      motivationText: {
        en: 'Show that you are motivated to improve your skills, implement innovative solutions and stay abreast of new technologies.',
        de: 'Show that you are motivated to improve your skills, implement innovative solutions and stay abreast of new technologies.',
      }
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
            btn1: {
              text: {
                de: 'GitHub',
                en: 'GitHub'
              },
              link: 'https://github.com/Andre-Gross/join'
            },
            btn2: {
              text: {
                de: 'Testen',
                en: 'Live Test'
              },
              link: ''
            },
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
            btn1: {
              text: {
                de: 'GitHub',
                en: 'GitHub'
              },
              link: 'https://github.com/Andre-Gross/join'
            },
            btn2: {
              text: {
                de: 'Testen',
                en: 'Live Test'
              },
              link: ''
            },
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
        //   key: 'project3',
        //   name: 'Project DA Bubble',
        //   img: {
        //     imgPath: 'img/my-work/da-bubble.png',
        //     btn1: {
        //       text: { de: 'GitHub', en: 'GitHub' },
        //       link: 'https://github.com/Andre-Gross/join'
        //     },
        //     btn2: {
        //       text: { de: 'Testen', en: 'Live Test' },
        //       link: ''
        //     },
        //   },
        //   paragraph1: {
        //     header: { en: 'About the project', de: 'Über das Projekt' },
        //     content: { en: '...', de: '...' },
        //   },
        //   paragraph2: {
        //     header: { en: 'Technologies I have used', de: 'Verwendete Technologien' },
        //     content: 'JavaScript, HTML, CSS',
        //   },
        //   paragraph3: {
        //     header: { en: 'My group-projects experience', de: 'Meine Erfahrung mit Gruppenprojekten' },
        //     content: { en: '...', de: '...' },
        //   },
        // },
      ]
    },
    myReferences: {
      title: {
        en: 'References',
        de: 'Referenzen',
      },
      references: [
        {
          text: {
            en: 'I found him to be a reliable and competent project partner, and I look forward to working with him again in the future.',
            de: 'Ich habe ihn als verlässlichen und kompetenten Projektpartner erlebt und freue mich, wenn wir auch in Zukunft wieder zusammenarbeiten.',
          },
          author: 'Kai Dietrich',
          context: 'Project Join',
        },
        {
          text: {
            en: 'I found him to be a reliable and competent project partner, and I look forward to working with him again in the future.',
            de: 'Ich habe ihn als verlässlichen und kompetenten Projektpartner erlebt und freue mich, wenn wir auch in Zukunft wieder zusammenarbeiten.',
          },
          author: 'Kai Dietrich',
          context: 'Project Join',
        },
      ]
    },
    contact: {
      title: {
        en: 'Contact',
        de: 'Kontakt',
      },
      form: {
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
            de: ' gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.'
          },
        },
        submit: {
          en: 'Send',
          de: 'Senden',
        },
      },
      callToAction: {
        firstLine: {
          en: 'Let us work together.',
          de: 'Arbeiten wir zusammen',
        },
        paragraph: {
          en: 'Encourage people to contact you and describe what role you are interested in. Express confidence in your ability to make a meaningful contribution to a team through your expertise and enthusiasm for improving your skills.',
          de: 'Encourage people to contact you and describe what role you are interested in. Express confidence in your ability to make a meaningful contribution to a team through your expertise and enthusiasm for improving your skills.',
        }
      }
    }
  })


 public content = computed(() => {
    const lang = this.currentLang();
    const d = this.mainPageData();

    const t = (obj: any) => (obj && typeof obj === 'object' && obj[lang] ? obj[lang] : obj);

    return {
      general: d.general, // Statische Daten wie E-Mail/Tel einfach durchreichen
      whyMe: {
        title: t(d.whyMe.title),
        aboutMe: t(d.whyMe.aboutMe),
        iAm: t(d.whyMe.iAm),
        singleArguments: {
          location: t(d.whyMe.singleArguments.location),
          remote: t(d.whyMe.singleArguments.remote),
          relocate: t(d.whyMe.singleArguments.relocate),
        },
      },
      mySkillSet: {
        title: t(d.mySkillSet.title),
        skillText: t(d.mySkillSet.skillText),
        motivationText: t(d.mySkillSet.motivationText),
        skills: d.mySkillSet.skills.map((s) => ({
          ...s,
          skillName: t(s.skillName)
        }))
      },
      myWork: {
        title: t(d.myWork.title),
        projects: d.myWork.projects.map((p) => ({
          ...p,
          img: {
            ...p.img,
            btn1: { ...p.img.btn1, text: t(p.img.btn1.text) },
            btn2: { ...p.img.btn2, text: t(p.img.btn2.text) },
          },
          paragraph1: {
            header: t(p.paragraph1.header),
            content: t(p.paragraph1.content)
          },
          paragraph2: {
            header: t(p.paragraph2.header),
            content: p.paragraph2.content
          },
          paragraph3: {
            header: t(p.paragraph3.header),
            content: t(p.paragraph3.content)
          },
        })),
      },
      myReferences: {
        title: t(d.myReferences.title),
        references: d.myReferences.references.map((r) => ({
          ...r,
          text: t(r.text)
        }))
      },
      contact: {
        title: t(d.contact.title),
        callToAction: {
          firstLine: t(d.contact.callToAction.firstLine),
          paragraph: t(d.contact.callToAction.paragraph)
        },
        form: {
          name: t(d.contact.form.name),
          email: t(d.contact.form.email),
          message: t(d.contact.form.message),
          privacy: {
            text1: t(d.contact.form.privacy.text1),
            link: t(d.contact.form.privacy.link),
            text2: t(d.contact.form.privacy.text2),
          },
          submit: t(d.contact.form.submit),
        }
      },
    };
  });


  setLang(lang: 'en' | 'de') {
    this.currentLang.set(lang);
    console.log("Language changed to: ", this.currentLang());
  }
}
