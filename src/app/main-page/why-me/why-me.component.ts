import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ArgumentBlock } from './argument-block/argument-block.component';

import { ScrollService } from '../../shared/services/scroll/scroll.service';
import { ContentService } from '../../shared/services/content/content.service';


@Component({
    selector: 'app-why-me',
    imports: [
        SectionTitleComponent,
        ArgumentBlock,
        NgStyle
    ],
    templateUrl: './why-me.component.html',
    styleUrl: './why-me.component.scss',
})
export class WhyMeSection {
    @Input() whyMe!: any;


    constructor(private scrollService: ScrollService, public contentService: ContentService) { }


    triggerScroll(sectionId: string): void {   
        this.scrollService.requestScroll(sectionId);
    }
}
