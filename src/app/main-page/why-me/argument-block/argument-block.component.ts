import { Component, Input } from '@angular/core';
import { SingleArgument } from './single-argument/single-argument.component';
import { KeyValuePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-argument-block',
  imports: [
    SingleArgument,
    KeyValuePipe,
    NgStyle
],
  templateUrl: './argument-block.component.html',
  styleUrl: './argument-block.component.scss',
})
export class ArgumentBlock {
    @Input() arguments!: any;

}
