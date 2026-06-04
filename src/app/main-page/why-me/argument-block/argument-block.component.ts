import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { ContentService } from '../../../shared/services/content/content.service';
import { DynamicSvgComponent } from './dynamic-svg.component';

@Component({
  selector: 'app-argument-block',
  standalone: true,
  imports: [
    KeyValuePipe,
    DynamicSvgComponent
  ],
  templateUrl: './argument-block.component.html',
  styleUrl: './argument-block.component.scss',
})
export class ArgumentBlock {
  constructor(public contentService: ContentService) { }
}