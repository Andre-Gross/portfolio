import { Component, signal } from '@angular/core';

import { ContentService } from '../../shared/services/content/content.service';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';


@Component({
  selector: 'app-references',
  imports: [SectionTitleComponent],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})


export class ReferencesSection {
  activeStep = signal<number>(0);


  constructor(public contentService: ContentService, private scrollService: ScrollService) { }


  onScroll(container: HTMLDivElement) {
    const children = Array.from(container.children) as HTMLElement[];
    const scrollPosition = container.scrollLeft;

    let closestIndex = 0;
    let minDistance = Infinity;

    
    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - scrollPosition);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (this.activeStep() !== closestIndex) {
      this.activeStep.set(closestIndex);
    }
  }


  scrollToIndex(container: HTMLDivElement, index: number) {
    const children = container.children;
    if (index >= 0 && index < children.length) {
      const targetElement = children[index] as HTMLElement;
      
      container.scrollTo({
        left: targetElement.offsetLeft,
        behavior: 'smooth'
      });
      
      this.activeStep.set(index);
    }
  }


  triggerScroll(sectionId: string): void {
    this.scrollService.requestScroll(sectionId);
  }
}