import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 15;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      //this.counter += 1;
      this.counterSignal.update((v) => v + 1);
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((numero) => numero + value);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
