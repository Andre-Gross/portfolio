import { Component, input, effect, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-svg',
  standalone: true,
  template: `<div [innerHTML]="svgContent()"></div>`,
  styles: [`:host { display: flex; justify-content: center; width: 100%; }`]
})
export class DynamicSvgComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  key = input.required<string>();
  svgContent = signal<SafeHtml>('');

  constructor() {
    effect(() => {
      const currentKey = this.key();
      if (currentKey) {
        this.http.get(`img/why-me/${currentKey}.svg`, { responseType: 'text' })
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