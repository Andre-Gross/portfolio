import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-section-area',
  templateUrl: './switch-section-area.html',
  styleUrl: './switch-section-area.scss',
})
export class SwitchSectionArea {
  position = Math.random();

  get marginTop(): string {
    return `calc(${this.position * 60}vh + 20vh)`;
  }
}
