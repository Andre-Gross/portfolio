import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentService } from '../../../shared/services/content/content.service';
import { } from '@angular/core';


@Component({
  selector: 'app-lang-switch',
  imports: [],
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.scss',
})
export class LangSwitchComponent {

  @Input() theme: 'light' | 'dark' = 'light';

  @Output() newLang = new EventEmitter<string>();


  constructor(private contentService: ContentService) { }


  checkCurrentLang(lang: 'en' | 'de') {
    return this.contentService.currentLang() === lang;
  }


  setLang(lang: 'en' | 'de') {
    this.contentService.setLang(lang);
  }
}
