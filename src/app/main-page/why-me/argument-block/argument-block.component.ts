import { Component} from '@angular/core';
import { KeyValuePipe} from '@angular/common';

import { ContentService } from '../../../shared/services/content/content.service';

@Component({
  selector: 'app-argument-block',
  imports: [
    KeyValuePipe
],
  templateUrl: './argument-block.component.html',
  styleUrl: './argument-block.component.scss',
})
export class ArgumentBlock {

      constructor(public contentService: ContentService) { }
  

}
