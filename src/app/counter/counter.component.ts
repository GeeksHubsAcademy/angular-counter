import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() max = 20;
  @Input() min = 0;

  private count = 0;

  constructor() { }

  ngOnInit() {
    this.count = this.min ? this.min : 0;
  }

  increment() {
    if (this.count < this.max) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > this.min) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

}
