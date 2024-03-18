import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
  toggleProperty = false;

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

}
