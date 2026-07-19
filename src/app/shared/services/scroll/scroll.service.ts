import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private router = inject(Router);
  private scrollRequestSource = new Subject<string>();
  scrollRequest$ = this.scrollRequestSource.asObservable();

  public breakpointTabletPortrait = 1199;
  public activeSection = signal<string>('');

  requestScroll(sectionId: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollRequestSource.next(sectionId);
    } else {
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }
}
