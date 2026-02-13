import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {

    private scrollRequestSource = new Subject<string>();
    scrollRequest$ = this.scrollRequestSource.asObservable();


    requestScroll(sectionId: string): void {
        this.scrollRequestSource.next(sectionId);
    }
}
