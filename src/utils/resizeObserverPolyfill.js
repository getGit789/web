// Polyfill to handle ResizeObserver loop limit exceeded error
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

export const setupResizeObserverPolyfill = () => {
  const observer = window.ResizeObserver;
  if (observer) {
    // Wrapper to protect against loop limit exceeded
    window.ResizeObserver = class ResizeObserver extends observer {
      constructor(callback) {
        super(debounce(callback, 20)); // Debounce the callback
      }
    };
  }
};
