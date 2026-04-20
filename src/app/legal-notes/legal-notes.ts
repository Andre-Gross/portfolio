import { Component } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';

@Component({
  selector: 'app-legal-notes',
  standalone: true,
  imports: [],
  templateUrl: './legal-notes.html',
  styleUrl: './legal-notes.scss'
})
export class LegalNotes {
  constructor(public contentService: ContentService) {}
}