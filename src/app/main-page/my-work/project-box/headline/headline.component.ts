import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent {

  @Input() index!: number
  @Input() name!: string

}
