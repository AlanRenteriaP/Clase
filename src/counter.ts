export class Counter {
  private count: number = 0;

  constructor(initialValue: number = 0) {
    this.count = initialValue;
  }

  increment(): number {
    this.count += 2;
    return this.count;
  }

  decrement(): number {
    this.count -= 1;
    return this.count;
  }

  getCount(): number {
    return this.count;
  }

  setCount(value: number): number {
    this.count = value;
    return this.count;
  }
}

export function setupCounter(
  incrementEl: HTMLButtonElement,
  decrementEl?: HTMLButtonElement
) {
  const counter = new Counter(0);

  const updateDisplay = () => {
    incrementEl.innerHTML = `count is ${counter.getCount()} :)`;
  };

  incrementEl.addEventListener('click', () => {
    counter.increment();
    updateDisplay();
  });

  if (decrementEl) {
    decrementEl.addEventListener('click', () => {
      counter.decrement();
      updateDisplay();
    });
  }

  updateDisplay();
  return counter; // Useful for testing
}
