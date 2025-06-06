export class Counter {
  private count: number = 0;

  constructor(initialValue: number = 0) {
    this.count = initialValue;
  }

  increment(): number {
    this.count += 1;
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

export function setupCounter(element: HTMLButtonElement) {
  const counter = new Counter(0);
  
  const updateDisplay = () => {
    element.innerHTML = `count is ${counter.getCount()} :)`;
  };

  element.addEventListener('click', () => {
    counter.increment();
    updateDisplay();
  });

  updateDisplay();
  return counter; // Useful for testing
}
