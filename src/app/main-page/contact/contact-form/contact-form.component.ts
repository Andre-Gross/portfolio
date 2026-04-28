import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { ContentService } from '../../../shared/services/content/content.service';


@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})


export class ContactFormComponent {

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

