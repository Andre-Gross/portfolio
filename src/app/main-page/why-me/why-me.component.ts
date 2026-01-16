import { Component } from '@angular/core';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProjectBoxComponent } from './project-box/project-box';

@Component({
    selector: 'app-why-me',
    imports: [
        SectionTitleComponent,
        ProjectBoxComponent,
    ],
    templateUrl: './why-me.component.html',
    styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {

}
