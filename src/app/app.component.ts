import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';

  max: number;
  min: number;
  limits = [];

  newCounter() {
    this.limits.push({
      max: this.max,
      min: this.min,
    });
  }
}
