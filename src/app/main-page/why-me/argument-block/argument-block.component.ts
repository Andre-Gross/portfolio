import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-argument-block',
  imports: [],
  templateUrl: './argument-block.component.html',
  styleUrl: './argument-block.component.scss',
})
export class ArgumentBlock {
    @Input() arguments!: any;

}
