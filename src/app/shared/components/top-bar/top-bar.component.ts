import { Component, Output, EventEmitter  } from '@angular/core';
import { ContentService } from '../../../shared/services/content/content.service';


@Component({
    selector: 'app-top-bar',
    imports: [],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {

    @Output() newLang = new EventEmitter<string>();


    constructor(private contentService: ContentService){}


    setLang(lang: 'en' | 'de') {
        this.contentService.setLang(lang);
    }


}
