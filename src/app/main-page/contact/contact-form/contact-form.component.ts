import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

import { ContentService } from '../../../shared/services/content/content.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {

  formSended: boolean = false

  private http = inject(HttpClient);
  mailTest = false;
  emailFocused = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  };

  private endPoint = '/contact-form-mail.php';

  constructor(public contentService: ContentService) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid && !this.mailTest) {

      this.http.post(this.endPoint, this.contactData)
        .subscribe({
          next: (response) => {
            console.log('Formular erfolgreich gesendet:', response);
            this.resetForm(contactForm);
            this.formSended = true;
          },
          error: (error) => {
            console.error('Fehler beim Senden:', error);
          },
          complete: () => console.info('Send post complete'),
        });

    } else if (contactForm.valid && this.mailTest) {
      console.log("Mailtest erfolgreich");
      this.resetForm(contactForm);
      this.formSended = true;
    }
  }

  private resetForm(contactForm: NgForm) {
    contactForm.resetForm({
      name: '',
      email: '',
      message: '',
      privacyAccepted: false
    });
  }
}