import '@testing-library/jest-dom/extend-expect'

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Map();
  }

  observe(element) {
    this.elements.set(element, true);
    this.callback([{ isIntersecting: true, target: element }], this); // Simulate the element being observed
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }
};