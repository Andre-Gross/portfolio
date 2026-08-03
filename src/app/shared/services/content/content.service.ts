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
            errorNoText: {
              en: 'Your e-mail is required',
              de: 'Bitte geben Sie ihre E-Mail-Adresse ein.'
            },
            errorInvalidEmail: {
              en: 'Your name is required',
              de: 'Bitte geben Sie Ihren Namen ein.'
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
      title: { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
      main: {
        de: [`<p>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der André Groß. Eine Nutzung der Internetseiten der André Groß ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.</p>
<p>Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die André Groß geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.</p>`,
          `<p>Die André Groß hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.</p>
<h4>1. Begriffsbestimmungen</h4>
<p>Die Datenschutzerklärung der André Groß beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.</p>
<p>Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</p>`,
          `<ul style="list-style: none">
<li><h4>a)    personenbezogene Daten</h4>
<p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.</p>
</li>
<li><h4>b)    betroffene Person</h4>
<p>Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.</p>`,
          `</li>
<li><h4>c)    Verarbeitung</h4>
<p>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
</li>
<li><h4>d)    Einschränkung der Verarbeitung</h4>
<p>Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</p>
</li>
<li><h4>e)    Profiling</h4>
<p>Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p>`,
          `</li>
<li><h4>f)     Pseudonymisierung</h4>
<p>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</p>
</li>
<li><h4>g)    Verantwortlicher oder für die Verarbeitung Verantwortlicher</h4>
<p>Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</p>`,
          `</li>
<li><h4>h)    Auftragsverarbeiter</h4>
<p>Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
</li>
<li><h4>i)      Empfänger</h4>
<p>Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.</p>
</li>
<li><h4>j)      Dritter</h4>
<p>Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p>`,
          `</li>
<li><h4>k)    Einwilligung</h4>
<p>Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</p>
</li>
</ul>
<h4>2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h4>
<p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:</p>

<div class='address'>
<div>
<p>André Groß</p>
<p>Winckelmannstraße 41</p>
<p>12487 Berlin</p>
<p>Deutschland</p>
</div>
<div>
<p>Tel.: 015204634494</p>
<p>E-Mail: mail@andre-gross.dev</p>
<p>Website: www.andre-gross.dev</p>
</div>
</div>
`,
          `<h4>3. Erfassung von allgemeinen Daten und Informationen</h4>
<p>Die Internetseite der André Groß erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.</p>`,
          `<p>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die André Groß keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die André Groß daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.</p>`,
          `<h4>4. Kontaktmöglichkeit über die Internetseite</h4>
<p>Die Internetseite der André Groß enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.</p>`,
          `<h4>5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h4>
<p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>

<p>Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>`,
          `<h4>6. Rechte der betroffenen Person</h4>
<ul style="list-style: none;">
<li><h4>a)    Recht auf Bestätigung</h4>
<p>Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
</li>
<li><h4>b)    Recht auf Auskunft</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:</p>`,
          `<ul style="list-style: none;">
<li>die Verarbeitungszwecke</li>
<li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
<li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen</li>
<li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
<li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
<li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
<li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>`,
          `<li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person</li>

</ul>
<p>Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.</p>

<p>Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
</li>`,
          `<li><h4>c)    Recht auf Berichtigung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.</p>`,
          `<p>Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
<li>
<h4>d)    Recht auf Löschung (Recht auf Vergessen werden)</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:</p>

<ul style="list-style: none;">
<li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
<li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
<li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>`,
          `<li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
<li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
<li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>
</ul>
<p>Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von personenbezogenen Daten, die bei der André Groß gespeichert sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der André Groß wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.</p>`,
          `<p>Wurden die personenbezogenen Daten von der André Groß öffentlich gemacht und ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten verpflichtet, so trifft die André Groß unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der André Groß wird im Einzelfall das Notwendige veranlassen.</p>
</li>
<li><h4>e)    Recht auf Einschränkung der Verarbeitung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>`,
          `<ul style="list-style: none;">
<li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
<li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
<li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
<li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>

</ul>
<p>Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschränkung von personenbezogenen Daten, die bei der André Groß gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der André Groß wird die Einschränkung der Verarbeitung veranlassen.</p>
</li>`,
          `<li><h4>f)     Recht auf Datenübertragbarkeit</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.</p>

<p>Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.</p>`,
          `<p>Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an einen Mitarbeiter der André Groß wenden.</p>

</li>
<li><h4>g)    Recht auf Widerspruch</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.</p>

<p>Die André Groß verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>`,
          `<p>Verarbeitet die André Groß personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegenüber der André Groß der Verarbeitung für Zwecke der Direktwerbung, so wird die André Groß die personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.</p>

<p>Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der André Groß zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</p>
<p>Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an jeden Mitarbeiter der André Groß oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.</p></li>`,
          `<li><h4>h)    Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</p>`,
          `<p>Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die André Groß angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>
<p>Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

</li>
<li><h4>i)      Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h4>
<p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</p>

<p>Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

</li>
</ul>`,
          `<h4>7. Datenschutzbestimmungen zu Einsatz und Verwendung von LinkedIn</h4>
<p>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten der LinkedIn Corporation integriert. LinkedIn ist ein Internetbasiertes soziales Netzwerk, das eine Konnektierung der Nutzer mit bestehenden Geschäftskontakten sowie das Knüpfen von neuen Businesskontakten ermöglicht. Über 400 Millionen registrierte Personen nutzen LinkedIn in mehr als 200 Ländern. Damit ist LinkedIn derzeit die größte Plattform für Businesskontakte und eine der meistbesuchten Internetseiten der Welt.</p>

<p>Betreibergesellschaft von LinkedIn ist die LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA. Für Datenschutzangelegenheiten außerhalb der USA ist LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, zuständig.</p>
<p>Bei jedem einzelnen Abruf unserer Internetseite, die mit einer LinkedIn-Komponente (LinkedIn-Plug-In) ausgestattet ist, veranlasst diese Komponente, dass der von der betroffenen Person verwendete Browser eine entsprechende Darstellung der Komponente von LinkedIn herunterlädt. Weitere Informationen zu den LinkedIn-Plug-Ins können unter https://developer.linkedin.com/plugins abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält LinkedIn Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>`,
          `<p>Sofern die betroffene Person gleichzeitig bei LinkedIn eingeloggt ist, erkennt LinkedIn mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die LinkedIn-Komponente gesammelt und durch LinkedIn dem jeweiligen LinkedIn-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen auf unserer Internetseite integrierten LinkedIn-Button, ordnet LinkedIn diese Information dem persönlichen LinkedIn-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten.</p>

<p>LinkedIn erhält über die LinkedIn-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufes unserer Internetseite gleichzeitig bei LinkedIn eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die LinkedIn-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an LinkedIn von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem LinkedIn-Account ausloggt.</p>`,
          `<p>LinkedIn bietet unter https://www.linkedin.com/psettings/guest-controls die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und zielgerichtete Anzeigen abzubestellen sowie Anzeigen-Einstellungen zu verwalten. LinkedIn nutzt ferner Partner wie Quantcast, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua und Lotame, die Cookies setzen können. Solche Cookies können unter https://www.linkedin.com/legal/cookie-policy abgelehnt werden. Die geltenden Datenschutzbestimmungen von LinkedIn sind unter https://www.linkedin.com/legal/privacy-policy abrufbar. Die Cookie-Richtlinie von LinkedIn ist unter https://www.linkedin.com/legal/cookie-policy abrufbar.</p>
<h4>8. Rechtsgrundlage der Verarbeitung</h4>
<p>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.`,
          `Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen.`,
          `Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.
Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden.`,
          `Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
</p>
<h4>9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</h4>
<p>Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.</p>`,
          `<h4>10. Dauer, für die die personenbezogenen Daten gespeichert werden</h4>
<p>Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.</p>`,
          `<h4>11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h4>
<p>Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen.`,
          `Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte.
Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
</p>`,
          `<h4>12. Bestehen einer automatisierten Entscheidungsfindung</h4>
<p>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>

<p>Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz GmbH, die als <a href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/">Externer Datenschutzbeauftragter Hof</a> tätig ist, in Kooperation mit dem <a href="https://www.wbs.legal/it-recht/datenschutzrecht/">Anwalt für Datenschutzrecht</a> Christian Solmecke erstellt.
</p>

`],
        en: `<p>We are very delighted that you have shown interest in our enterprise. Data protection is of a particularly high priority for the management of the André Groß. The use of the Internet pages of the André Groß is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.</p>

<p>The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to the André Groß. By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.</p>

<p>As the controller, the André Groß has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g. by telephone. </p>

<h4>1. Definitions</h4>
<p>The data protection declaration of the André Groß is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used.</p>

<p>In this data protection declaration, we use, inter alia, the following terms:</p>

<ul style="list-style: none">
<li><h4>a)    Personal data</h4>
<p>Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
</li>
<li><h4>b) Data subject</h4>
<p>Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.</p>
</li>
<li><h4>c)    Processing</h4>
<p>Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction. </p>
</li>
<li><h4>d)    Restriction of processing</h4>
<p>Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future. </p>
</li>
<li><h4>e)    Profiling</h4>
<p>Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements. </p>
</li>
<li><h4>f)     Pseudonymisation</h4>
<p>Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person. </p>
</li>
<li><h4>g)    Controller or controller responsible for the processing</h4>
<p>Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law. </p>
</li>
<li><h4>h)    Processor</h4>
<p>Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller. </p>
</li>
<li><h4>i)      Recipient</h4>
<p>Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing. </p>
</li>
<li><h4>j)      Third party</h4>
<p>Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data.</p>
</li>
<li><h4>k)    Consent</h4>
<p>Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. </p>
</li>
</ul>

<h4>2. Name and Address of the controller</h4>
<p>Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:

</p>

<p>André Groß</p>
<p>Winckelmannstraße 41</p>
<p>12487 Berlin</p>
<p>Deutschland</p>
<p>Phone: 015204634494</p>
<p>Email: mail@andre-gross.dev</p>
<p>Website: www.andre-gross.dev</p>

<h4>3. Collection of general data and information</h4>
<p>The website of the André Groß collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.</p>

<p>When using these general data and information, the André Groß does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, the André Groß analyzes anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.</p>

<h4>4. Contact possibility via the website </h4>
<p>The website of the André Groß contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.</p>

<h4>5. Routine erasure and blocking of personal data</h4>
<p>The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.</p>

<p>If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.</p>

<h4>6. Rights of the data subject</h4>
<ul style="list-style: none;">
<li><h4>a) Right of confirmation</h4>
<p>Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact any employee of the controller.</p>
</li>
<li><h4>b) Right of access</h4>
<p>Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information:</p>

<ul style="list-style: none;">
<li>the purposes of the processing;</li>
<li>the categories of personal data concerned;</li>
<li>the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;</li>
<li>where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;</li>
<li>the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing;</li>
<li>the existence of the right to lodge a complaint with a supervisory authority;</li>
<li>where the personal data are not collected from the data subject, any available information as to their source;</li>
<li>the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject.</li>

</ul>
<p>Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third country or to an international organisation. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer.</p>

<p>If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact any employee of the controller.</p>
</li>
<li><h4>c) Right to rectification </h4>
<p>Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.</p>

<p>If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact any employee of the controller.</p></li>
<li>
<h4>d) Right to erasure (Right to be forgotten) </h4>
<p>Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal data concerning him or her without undue delay, and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies, as long as the processing is not necessary: </p>

<ul style="list-style: none;">
<li>The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed.</li>
<li>The data subject withdraws consent to which the processing is based according to point (a) of Article 6(1) of the GDPR, or point (a) of Article 9(2) of the GDPR, and where there is no other legal ground for the processing.</li>
<li>The data subject objects to the processing pursuant to Article 21(1) of the GDPR and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) of the GDPR. </li>
<li>The personal data have been unlawfully processed.</li>
<li>The personal data must be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.</li>
<li>The personal data have been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR.</li>

</ul>
<p>If one of the aforementioned reasons applies, and a data subject wishes to request the erasure of personal data stored by the André Groß, he or she may, at any time, contact any employee of the controller. An employee of André Groß shall promptly ensure that the erasure request is complied with immediately.</p>

<p>Where the controller has made personal data public and is obliged pursuant to Article 17(1) to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform other controllers processing the personal data that the data subject has requested erasure by such controllers of any links to, or copy or replication of, those personal data, as far as processing is not required. An employees of the André Groß will arrange the necessary measures in individual cases.</p>
</li>
<li><h4>e) Right of restriction of processing</h4>
<p>Each data subject shall have the right granted by the European legislator to obtain from the controller restriction of processing where one of the following applies:</p>

<ul style="list-style: none;">
<li>The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data. </li>
<li>The processing is unlawful and the data subject opposes the erasure of the personal data and requests instead the restriction of their use instead.</li>
<li>The controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims.</li>
<li>The data subject has objected to processing pursuant to Article 21(1) of the GDPR pending the verification whether the legitimate grounds of the controller override those of the data subject.</li>

</ul>
<p>If one of the aforementioned conditions is met, and a data subject wishes to request the restriction of the processing of personal data stored by the André Groß, he or she may at any time contact any employee of the controller. The employee of the André Groß will arrange the restriction of the processing. </p>
</li>
<li><h4>f) Right to data portability</h4>
<p>Each data subject shall have the right granted by the European legislator, to receive the personal data concerning him or her, which was provided to a controller, in a structured, commonly used and machine-readable format. He or she shall have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, as long as the processing is based on consent pursuant to point (a) of Article 6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a contract pursuant to point (b) of Article 6(1) of the GDPR, and the processing is carried out by automated means, as long as the processing is not necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.</p>

<p>Furthermore, in exercising his or her right to data portability pursuant to Article 20(1) of the GDPR, the data subject shall have the right to have personal data transmitted directly from one controller to another, where technically feasible and when doing so does not adversely affect the rights and freedoms of others.</p>

<p>In order to assert the right to data portability, the data subject may at any time contact any employee of the André Groß.</p>

</li>
<li>
<h4>g) Right to object</h4>
<p>Each data subject shall have the right granted by the European legislator to object, on grounds relating to his or her particular situation, at any time, to processing of personal data concerning him or her, which is based on point (e) or (f) of Article 6(1) of the GDPR. This also applies to profiling based on these provisions.</p>

<p>The André Groß shall no longer process the personal data in the event of the objection, unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject, or for the establishment, exercise or defence of legal claims.</p>

<p>If the André Groß processes personal data for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing. This applies to profiling to the extent that it is related to such direct marketing. If the data subject objects to the André Groß to the processing for direct marketing purposes, the André Groß will no longer process the personal data for these purposes.</p>

<p>In addition, the data subject has the right, on grounds relating to his or her particular situation, to object to processing of personal data concerning him or her by the André Groß for scientific or historical research purposes, or for statistical purposes pursuant to Article 89(1) of the GDPR, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</p>

<p>In order to exercise the right to object, the data subject may contact any employee of the André Groß. In addition, the data subject is free in the context of the use of information society services, and notwithstanding Directive 2002/58/EC, to use his or her right to object by automated means using technical specifications.</p>
</li>
<li><h4>h) Automated individual decision-making, including profiling</h4>
<p>Each data subject shall have the right granted by the European legislator not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her, or similarly significantly affects him or her, as long as the decision (1) is not is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) is not authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, or (3) is not based on the data subject's explicit consent.</p>

<p>If the decision (1) is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) it is based on the data subject's explicit consent, the André Groß shall implement suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and contest the decision.</p>

<p>If the data subject wishes to exercise the rights concerning automated individual decision-making, he or she may, at any time, contact any employee of the André Groß.</p>

</li>
<li><h4>i) Right to withdraw data protection consent </h4>
<p>Each data subject shall have the right granted by the European legislator to withdraw his or her consent to processing of his or her personal data at any time. </p>

<p>If the data subject wishes to exercise the right to withdraw the consent, he or she may, at any time, contact any employee of the André Groß.</p>

</li>
</ul>
<h4>7. Data protection provisions about the application and use of LinkedIn</h4>
<p>The controller has integrated components of the LinkedIn Corporation on this website. LinkedIn is a web-based social network that enables users with existing business contacts to connect and to make new business contacts. Over 400 million registered people in more than 200 countries use LinkedIn. Thus, LinkedIn is currently the largest platform for business contacts and one of the most visited websites in the world.</p>

<p>The operating company of LinkedIn is LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, UNITED STATES. For privacy matters outside of the UNITED STATES LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is responsible.</p>

<p>With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a LinkedIn component (LinkedIn plug-in) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding LinkedIn component of LinkedIn. Further information about the LinkedIn plug-in may be accessed under https://developer.linkedin.com/plugins. During the course of this technical procedure, LinkedIn gains knowledge of what specific sub-page of our website was visited by the data subject.</p>

<p>If the data subject is logged in at the same time on LinkedIn, LinkedIn detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the LinkedIn component and associated with the respective LinkedIn account of the data subject. If the data subject clicks on one of the LinkedIn buttons integrated on our website, then LinkedIn assigns this information to the personal LinkedIn user account of the data subject and stores the personal data.</p>

<p>LinkedIn receives information via the LinkedIn component that the data subject has visited our website, provided that the data subject is logged in at LinkedIn at the time of the call-up to our website. This occurs regardless of whether the person clicks on the LinkedIn button or not. If such a transmission of information to LinkedIn is not desirable for the data subject, then he or she may prevent this by logging off from their LinkedIn account before a call-up to our website is made.</p>

<p>LinkedIn provides under https://www.linkedin.com/psettings/guest-controls the possibility to unsubscribe from e-mail messages, SMS messages and targeted ads, as well as the ability to manage ad settings. LinkedIn also uses affiliates such as Eire, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua, and Lotame. The setting of such cookies may be denied under https://www.linkedin.com/legal/cookie-policy. The applicable privacy policy for LinkedIn is available under https://www.linkedin.com/legal/privacy-policy. The LinkedIn Cookie Policy is available under https://www.linkedin.com/legal/cookie-policy.</p>

<h4>8. Legal basis for the processing </h4>
<p>Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based on Article 6(1) lit. b GDPR. The same applies to such processing operations which are necessary for carrying out pre-contractual measures, for example in the case of inquiries concerning our products or services. Is our company subject to a legal obligation by which processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR.
In rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or of another natural person. This would be the case, for example, if a visitor were injured in our company and his name, age, health insurance data or other vital information would have to be passed on to a doctor, hospital or other third party. Then the processing would be based on Art. 6(1) lit. d GDPR.
Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not covered by any of the abovementioned legal grounds, if processing is necessary for the purposes of the legitimate interests pursued by our company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data. Such processing operations are particularly permissible because they have been specifically mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).
</p>

<h4>9. The legitimate interests pursued by the controller or by a third party</h4>
<p>Where the processing of personal data is based on Article 6(1) lit. f GDPR our legitimate interest is to carry out our business in favor of the well-being of all our employees and the shareholders.</p>

<h4>10. Period for which the personal data will be stored</h4>
<p>The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract.</p>

<h4>11. Provision of personal data as statutory or contractual requirement; Requirement necessary to enter into a contract; Obligation of the data subject to provide the personal data; possible consequences of failure to provide such data </h4>
<p>We clarify that the provision of personal data is partly required by law (e.g. tax regulations) or can also result from contractual provisions (e.g. information on the contractual partner).

Sometimes it may be necessary to conclude a contract that the data subject provides us with personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract with the data subject could not be concluded.

Before personal data is provided by the data subject, the data subject must contact any employee. The employee clarifies to the data subject whether the provision of the personal data is required by law or contract or is necessary for the conclusion of the contract, whether there is an obligation to provide the personal data and the consequences of non-provision of the personal data.
</p>

<h4>12. Existence of automated decision-making</h4>
<p>As a responsible company, we do not use automatic decision-making or profiling.</p>

<p>Developed by the specialists for <a href="https://willing-able.com/">LegalTech</a> at Willing & Able that also developed the system for <a href="https://abletocontract.com/">electronic agreements</a>. The legal texts contained in our privacy policy generator have been provided and published by <a href="https://dg-datenschutz.de/">Prof. Dr. h.c. Heiko Jonny Maniero</a> from the German Association for Data Protection and <a href="https://www.wbs.legal/" rel="nofollow">Christian Solmecke</a> from WBS law.</p>

`],
      },
    },
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
              error: t(d.mainPage.contact.form.name.error),
            },
            email: {
              placeholder: t(d.mainPage.contact.form.email.placeholder),
              errorNoText: t(d.mainPage.contact.form.email.errorNoText),
              errorInvalidEmail: t(d.mainPage.contact.form.email.errorInvalidEmail),
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
      },
      privacyPolicy: {
        title: t(d.privacyPolicy.title),
        main: t(d.privacyPolicy.main),
      }
    };
  });


  setLang(lang: 'en' | 'de') {
    this.currentLang.set(lang);
  }
}
