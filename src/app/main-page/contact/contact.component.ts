import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ScrollService } from '../../shared/services/scroll/scroll.service';
import { ContentService } from '../../shared/services/content/content.service';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        SectionTitleComponent,
        FormsModule,
        CommonModule,
        RouterLink],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactSection {

    constructor(public contentService: ContentService, private scrollService: ScrollService) { }

    contactData = {
        name: '',
        email: '',
        message: '',
        privacyAccepted: false
    };

    onSubmit(contactForm: NgForm) {
        if (contactForm.valid) {
            console.log('Formular-Inhalt:', this.contactData);

            contactForm.resetForm();

            this.contactData = {
                name: '',
                email: '',
                message: '',
                privacyAccepted: false
            };
        }
    }

    triggerScroll(sectionId: string): void {
        this.scrollService.requestScroll(sectionId);
    }
}
