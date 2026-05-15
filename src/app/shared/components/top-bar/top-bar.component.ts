import { Component } from '@angular/core';
import { LangSwitchComponent } from '../lang-switch/lang-switch.component';
import { ContactLinksComponent } from '../contact-links/contact-links.component';

@Component({
    selector: 'app-top-bar',
    imports: [
        ContactLinksComponent,
        LangSwitchComponent
    ],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {

}
