import { Component, input, effect, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-svg',
  standalone: true,
  template: `<div class="svg-wrapper" [innerHTML]="svgContent()"></div>`,
  styles: [`
    :host { 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: min-content; 
      width: 100%; 
    }

    .svg-wrapper {
     display: flex;
    }

    :host ::ng-deep svg {
     display: block;
    }
  `]
})
export class DynamicSvgComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  imgName = input.required<string>();
  folder = input.required<string>();
  svgContent = signal<SafeHtml>('');

  constructor() {
    effect(() => {
      const currentKey = this.imgName();
      if (currentKey) {
        this.http.get(`img/${this.folder()}/${currentKey}.svg`, { responseType: 'text' })
          .subscribe({
            next: (rawSvg) => {
              this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(rawSvg));
            },
            error: (err) => console.error(`SVG konnte nicht geladen werden: ${currentKey}`, err)
          });
      }
    });
  }
}