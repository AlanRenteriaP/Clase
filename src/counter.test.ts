// src/counter.test.ts
import { describe, it, expect } from 'vitest';
import { Counter } from './counter';

describe('Counter', () => {
  it('should initialize with default value of 0', () => {
    const counter = new Counter();
    expect(counter.getCount()).toBe(0);
  });

  it('should initialize with provided value', () => {
    const counter = new Counter(5);
    expect(counter.getCount()).toBe(5);
  });

  it('should increment counter by 1', () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  it('should decrement counter by 1', () => {
    const counter = new Counter(5);
    counter.decrement();
    expect(counter.getCount()).toBe(4);
  });

  it('should set counter to specific value', () => {
    const counter = new Counter();
    counter.setCount(10);
    expect(counter.getCount()).toBe(10);
  });
});