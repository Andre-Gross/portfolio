import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';


@Component({
    selector: 'app-contact',
    imports: [
        SectionTitleComponent,
        FormsModule,
        CommonModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactSection {
    @Input() data!: any;

    contact = {
        name: '',
        email: '',
        message: '',
        privacyAccepted: false,
    };


    onSubmit(formValue: any) {
        console.log('Formular gesendet!', formValue);
        this.resetForm();
    }


    private resetForm() {
        this.contact = {
            name: '',
            email: '',
            message: '',
            privacyAccepted: false,
        };
    }

}
