import { Component, Input } from '@angular/core';
import { SingleArgument } from './single-argument/single-argument.component';
import { KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-argument-block',
  imports: [
    SingleArgument,
    KeyValuePipe
],
  templateUrl: './argument-block.component.html',
  styleUrl: './argument-block.component.scss',
})
export class ArgumentBlock {
    @Input() arguments!: any;

}
