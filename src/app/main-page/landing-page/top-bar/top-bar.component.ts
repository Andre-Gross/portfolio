import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    imports: [],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {

    @Output() newLang = new EventEmitter<string>();

    setLang(lang: string) {
        this.newLang.emit(lang);
    }


}
