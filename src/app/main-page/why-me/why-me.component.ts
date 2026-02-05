import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ArgumentBlock } from './argument-block/argument-block.component';


@Component({
    selector: 'app-why-me',
    imports: [
        SectionTitleComponent,
        ArgumentBlock,
    ],
    templateUrl: './why-me.component.html',
    styleUrl: './why-me.component.scss',
})
export class WhyMeSection {
    @Input() data!: any;

}
