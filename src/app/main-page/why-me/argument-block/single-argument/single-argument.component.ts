import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-single-argument',
  imports: [],
  templateUrl: './single-argument.component.html',
  styleUrl: './single-argument.component.scss',
})
export class SingleArgument {
    @Input() data!: any;

}
