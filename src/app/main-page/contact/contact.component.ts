import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ContentService } from '../../shared/services/content/content.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [SectionTitleComponent, FormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactSection {

    constructor(public contentService: ContentService) { }

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
}
