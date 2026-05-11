import { Component } from '@angular/core';
import { LangSwitchComponent } from '../lang-switch/lang-switch.component';

@Component({
    selector: 'app-top-bar',
    imports: [LangSwitchComponent],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {

}
