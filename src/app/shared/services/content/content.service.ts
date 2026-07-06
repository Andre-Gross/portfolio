import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {


  currentLang: WritableSignal<'en' | 'de'> = signal('de');


  data = signal({
    general: {
      name: 'André Groß',
      email: 'mail@andre-gross.dev',
      tel: '+49 152 046 344 94',
      address: {
        street: 'Winckelmannstraße 41',
        zip: '12487',
        city: 'Berlin',
      },
    },
    mainPage: {
      whyMe: {
        title: {
          en: 'Why me',
          de: 'Warum mich',
        },
        aboutMe: {
          en: `"Don't repeat yourself" - I write reusable code. Feel free to check it out in the Dev Tools. Does the element exist twice? The code only once.`,
          de: `"Don't repeat yourself" - Ich schreibe wiederverwendbaren Code. Schaue ihn dir gerne in den Dev-Tools an. Das Element existiert zweimal? Der Code nur einmal.`,
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
        contactBtn: {
          en: 'Contact me',
          de: 'Kontaktieren Sie mich'
        }
      },
      mySkillSet: {
        title: {
          en: 'My Skill Set',
          de: 'Fähigkeiten',
        },
        skillText: {
          en: `In my daily life, I use various technologies to implement projects such as Kanban boards and team messengers. New framework? New language? If it advances your product, I'll learn it.`,
          de: 'In meinem Alltag nutze ich diverse Technologien, um Projekte wie Kanban-Boards und Team-Messenger umzusetzen. Neues Framework? Neue Sprache? Bringt es euer Produkt voran, lerne ich es.',
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
            imgPath: 'img/my-skill-set/firebase.svg',
            skillName: 'Firebase',
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
          en: `Are you missing a framework or a key technology? I enthusiastically delve into documentation and code examples to quickly familiarize myself with your product.`,
          de: 'Dir fehlt ein Framework oder eine Schlüsseltechnologie? Mit Begeisterung vertiefe ich mich in Dokumentationen und Codebeispiele, um mich schnell in euer Produkt einarbeiten zu können.',
        },
        contactBtn: {
          en: 'Let´s talk',
          de: 'Let´s talk',
        },
      },
      myWork: {
        title: {
          en: 'My work',
          de: 'Projekte',
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
                link: 'https://join.andre-gross.dev'
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
              content: 'JavaScript, HTML, CSS, Firebase',
            },
            paragraph3: {
              header: {
                en: 'My group-projects experience',
                de: 'Meine Erfahrung mit Gruppenprojekten',
              },
              content: {
                en: `In this team of three, as developer and moderator, I led the meetings and implemented the API functions, the detail modals in the board, and the "Add Task" page. Through targeted pair programming, I have also supported colleagues with complex bugs in order to secure common goals.`,
                de: 'In diesem 3er-Team habe ich als Entwickler und Moderator die Meetings angeleitet sowie die API-Funktionen, die Detail-Modals im Board und die "Add Task"-Seite umgesetzt. Durch gezieltes Pair Programming habe ich zudem Kollegen bei komplexen Bugs unterstützt, um die gemeinsamen Ziele zu sichern.',
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
                link: 'https://el-pollo-loco.andre-gross.dev'
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
                en: `Through object-oriented programming, I have neatly encapsulated the code and avoided duplicates through inheritance. The result is a structure that is both maintainable and reusable.`,
                de: 'Durch Objektorientierte Programmierung habe ich den Code sauber gekapselt und Duplikate mittels Vererbung vermieden. Das Ergebnis ist eine Struktur, die sowohl wartbar als auch wiederverwendbar ist.',
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
        ],
        showMeTexts: {
          more: {
            en: 'Show me more',
            de: 'Ausklappen',
          },
          less: {
            en: 'Show me less',
            de: 'Einklappen',
          },
        },
        ongoingProjects: {
          headline: {
            en: 'Ongoing Projects',
            de: 'Laufende Projekte'
          },
          text: {
            en: 'In my current team project with Angular and Supabase, I am using my knowledge to advance the architecture. Through structured project planning and agile communication, we guarantee efficient execution and excellent results.',
            de: 'In meinem aktuellen Team-Projekt mit Angular und Supabase setze ich meine Kenntnisse ein, um die Architektur voranzutreiben. Durch strukturierte Projektplanung und agile Kommunikation garantieren wir eine effiziente Ausführung und exzellente Ergebnisse.'
          },
          btn: {
            en: `Let's talk`,
            de: 'Lass uns reden'
          }
        }
      },
      myReferences: {
        title: {
          en: 'References',
          de: 'Referenzen',
        },
        mobileText: {
          title: {
            en: 'Need a teamplayer?',
            de: 'Brauchen Sie ein Teamspieler?'
          },
          subtitle: {
            en: 'Here what my colleagues said about me',
            de: 'Das sagen meine Kollegen über mich',
          },
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
              en: 'Itś a test text. (Wird nach eurem Feedback entfernt. Dient nur dazu, das Design zu prüfen)',
              de: 'Ist ein Test Text (Wird nach eurem Feedback entfernt. Dient nur dazu, das Design zu prüfen)',
            },
            author: 'Na ich',
            context: 'Project Dieses hier',
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
            placeholder: {
              en: 'Your name',
              de: 'Ihr Name',
            },
            error: {
              en: 'Your name is required',
              de: 'Bitte geben Sie Ihren Namen ein.'
            }
          },
          email: {
            placeholder: {
              en: 'Your e-mail',
              de: 'Ihre E-Mail-Adresse',
            },
            error: {
              en: 'Your e-mail is required',
              de: 'Bitte geben Sie ihre E-Mail-Adresse ein.'
            }
          },
          message: {
            placeholder: {
              en: 'Your message',
              de: 'Ihre Nachricht',
            },
            error: {
              en: 'Your message is required',
              de: 'Bitte tragen Sie eine Nachricht ein.'
            }
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
            error: {
              en: 'Please accept the privacy policy.',
              de: 'Bitte akzeptieren sie die Datenschutzerklärung'
            }
          },
          submit: {
            en: 'Send',
            de: 'Senden',
          },
        },
        callToAction: {
          firstLine: {
            en: 'Let us work together.',
            de: 'Arbeiten wir zusammen.',
          },
          paragraph: {
            en: 'I am a frontend developer with project experience who is continuing my education and developing full-stack skills. I can support your team in the frontend today and expand your backend tomorrow. Get in touch to help me advance your product.',
            de: 'Ich bin ein Frontend-Developer mit Projekt-Erfahrung, der sich weiterbildet und Fullstack-Kompetenzen entwickelt. Ich kann dein Team heute im Frontend unterstützen und erweitere morgen dein Backend. Melde dich, um dein Produkt mit mir voranzubringen.',
          }
        }
      }
    },
    legalNotes: {
      title: { de: 'Rechtshinweise', en: 'Legal Notes' },
      imprint: {
        header: { de: 'Impressum', en: 'Imprint' },
        // text: { de: '', en: 'Exploring the Board' },
        emailKey: { de: 'E-Mail', en: 'Email' },
      },
      main: [
        {
          header: { de: 'Zustimmung zu den Nutzungsbedingungen', en: 'Acceptance of terms' },
          text: {
            de: 'Durch den Zugriff auf und die Nutzung von Portfolio (Produkt) erkennen Sie die folgenden Nutzungsbedingungen sowie alle Richtlinien, Leitlinien oder Änderungen daran, die Ihnen von Zeit zu Zeit vorgelegt werden, an und erklären sich damit einverstanden. Wir, die aufgeführten Studierenden, behalten uns vor, die Nutzungsbedingungen von Zeit zu Zeit ohne vorherige Ankündigung zu aktualisieren oder zu ändern.',
            en: 'By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.'
          }
        },
        {
          header: { de: 'Umfang und Eigentumsrechte des Produkts', en: 'Scope and ownership of the product' },
          text: {
            de: 'Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp bei der Developer Akademie GmbH entwickelt. Es dient zu Bildungszwecken und ist nicht für den umfassenden privaten oder geschäftlichen Gebrauch bestimmt. Daher können wir keine Gewähr für die ständige Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder sonstige Qualitätsmerkmale dieses Produkts übernehmen. Das Design von Portfolio ist Eigentum der Developer Akademie GmbH. Die unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Nachahmung des Designs ist strengstens untersagt.',
            en: 'Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product. The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.'
          }
        },
        {
          header: { de: 'Eigentumsrechte', en: 'Proprietary rights' },
          text: {
            de: 'Abgesehen von dem Design, dessen Eigentümer die Developer Akademie GmbH ist, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte am Portfolio, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten Informationen.',
            en: 'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.'
          }
        },
        {
          header: { de: 'Nutzung des Produkts', en: 'Use of the product' },
          text: {
            de: 'Portfolio darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jede Nutzung von Portfolio für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strengstens untersagt. Sie tragen die alleinige Verantwortung für Ihre Interaktionen mit anderen Nutzern von Portfolio.',
            en: 'Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.'
          }
        },
        {
          header: { de: 'Haftungsausschluss und Haftungsbeschränkung', en: 'Disclaimer of warranties and limitation of liability' },
          text: {
            de: 'Das Portfolio wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf die stillschweigenden Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter. In keinem Fall haften wir, die aufgeführten Studierenden oder die Developer Akademie für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, einschließlich, aber nicht beschränkt auf Schäden aufgrund von entgangenem Gewinn, Verlust von Goodwill, Nutzungsausfall, Datenverlust oder anderen immateriellen Verlusten, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die sich aus oder im Zusammenhang mit der Nutzung oder Leistung von Portfolio ergeben.',
            en: 'Portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.'
          }
        },
        {
          header: { de: 'Haftungsfreistellung', en: 'Indemnity' },
          text: {
            de: 'Sie erklären sich damit einverstanden, uns, die aufgeführten Studierenden, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Beauftragten und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungsansprüchen (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und schadlos zu halten, die sich aus Ihrer Nutzung von Portfolio und/oder Ihrem Verstoß gegen diesen rechtlichen Hinweis ergeben oder damit in Zusammenhang stehen.',
            en: 'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.'
          }
        },
      ],
      anyQuestions: {
        text: { de: 'Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter ', en: 'For any questions or notices, please contact us at ' },
        date: { de: 'Datum: 26. Juli 2025', en: 'Date: July 26, 2025' }
      }
    },
    privacyPolicy: {
      // Platzhalter für später
    }
  })




  public content = computed(() => {
    const lang = this.currentLang();
    const d = this.data();
    const t = (obj: any) => (obj && typeof obj === 'object' && obj[lang] ? obj[lang] : obj);

    return {
      general: d.general,
      mainPage: {
        whyMe: {
          title: t(d.mainPage.whyMe.title),
          aboutMe: t(d.mainPage.whyMe.aboutMe),
          iAm: t(d.mainPage.whyMe.iAm),
          singleArguments: {
            location: t(d.mainPage.whyMe.singleArguments.location),
            remote: t(d.mainPage.whyMe.singleArguments.remote),
            relocate: t(d.mainPage.whyMe.singleArguments.relocate),
          },
          contactBtn: t(d.mainPage.whyMe.contactBtn)
        },
        mySkillSet: {
          title: t(d.mainPage.mySkillSet.title),
          skillText: t(d.mainPage.mySkillSet.skillText),
          motivationText: t(d.mainPage.mySkillSet.motivationText),
          skills: d.mainPage.mySkillSet.skills.map((s) => ({
            ...s,
            skillName: t(s.skillName)
          })),
          contactBtn: t(d.mainPage.mySkillSet.contactBtn),
        },
        myWork: {
          title: t(d.mainPage.myWork.title),
          projects: d.mainPage.myWork.projects.map((p) => ({
            ...p,
            img: {
              ...p.img,
              btn1: { ...p.img.btn1, text: t(p.img.btn1.text) },
              btn2: { ...p.img.btn2, text: t(p.img.btn2.text) },
            },
            paragraph1: { header: t(p.paragraph1.header), content: t(p.paragraph1.content) },
            paragraph2: { header: t(p.paragraph2.header), content: p.paragraph2.content },
            paragraph3: { header: t(p.paragraph3.header), content: t(p.paragraph3.content) },
          })),
          showMeTexts: {
            more: t(d.mainPage.myWork.showMeTexts.more),
            less: t(d.mainPage.myWork.showMeTexts.less),
          },
          ongoingProjects: {
            headline: t(d.mainPage.myWork.ongoingProjects.headline),
            text: t(d.mainPage.myWork.ongoingProjects.text),
            btn: t(d.mainPage.myWork.ongoingProjects.btn)
          }
        },
        myReferences: {
          title: t(d.mainPage.myReferences.title),
          mobileText: {
            title: t(d.mainPage.myReferences.mobileText.title),
            subtitle: t(d.mainPage.myReferences.mobileText.subtitle),
          },
          references: d.mainPage.myReferences.references.map((r) => ({
            ...r,
            text: t(r.text)
          }))
        },
        contact: {
          title: t(d.mainPage.contact.title),
          callToAction: {
            firstLine: t(d.mainPage.contact.callToAction.firstLine),
            paragraph: t(d.mainPage.contact.callToAction.paragraph)
          },
          form: {
            name: {
              placeholder: t(d.mainPage.contact.form.name.placeholder),
              error: t(d.mainPage.contact.form.name.error)
            },
            email: {
              placeholder: t(d.mainPage.contact.form.email.placeholder),
              error: t(d.mainPage.contact.form.email.error)
            },
            message: {
              placeholder: t(d.mainPage.contact.form.message.placeholder),
              error: t(d.mainPage.contact.form.message.error)
            },
            privacy: {
              text1: t(d.mainPage.contact.form.privacy.text1),
              link: t(d.mainPage.contact.form.privacy.link),
              text2: t(d.mainPage.contact.form.privacy.text2),
              error: t(d.mainPage.contact.form.privacy.error),
            },
            submit: t(d.mainPage.contact.form.submit),
          }
        },
      },
      legalNotes: {
        title: t(d.legalNotes.title),
        imprint: {
          header: t(d.legalNotes.imprint.header),
          emailKey: t(d.legalNotes.imprint.emailKey)
        },
        main: d.legalNotes.main.map((item) => ({
          header: t(item.header),
          text: t(item.text)
        })),
        anyQuestions: {
          text: t(d.legalNotes.anyQuestions.text),
          date: t(d.legalNotes.anyQuestions.date)
        }
      }
    };
  });


  setLang(lang: 'en' | 'de') {
    this.currentLang.set(lang);
  }
}
