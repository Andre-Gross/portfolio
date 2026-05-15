import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ScrollService } from '../../shared/services/scroll/scroll.service';
import { ContentService } from '../../shared/services/content/content.service';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactLinksComponent } from '../../shared/components/contact-links/contact-links.component';


@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        RouterLink,
        SectionTitleComponent,
        ContactFormComponent,
        ContactLinksComponent
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactSection {

    constructor(public contentService: ContentService, private scrollService: ScrollService) { }

    triggerScroll(sectionId: string): void {
        this.scrollService.requestScroll(sectionId);
    }
}
