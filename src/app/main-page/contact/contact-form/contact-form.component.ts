import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  http = inject(HttpClient);
  mailTest = true;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  };

  post = {
    endPoint: 'https://andre-gross.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(public contentService: ContentService) { }


  onSubmit(contactForm: NgForm) {
    if (contactForm.submitted && contactForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            contactForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {
      console.log("Mailtest sucessfully")
      contactForm.resetForm();
    }
  }
}
