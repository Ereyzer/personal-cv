export function throtte (calback, delay = 0) {
  let lastCall = 0;
  let wait;
  let handle;
  return (...args) => {
    const now = Date.now();
    wait = lastCall + delay - now;
    clearTimeout(handle);
    if (wait <= 0) {
      handle = setTimeout(() => {
        calback(...args);
        lastCall = now;
      });
    }
  };
}

export const debounce = function (calback, delay = 0) {
  let handle;
  return (...args) => {
    clearTimeout(handle);
    handle = setTimeout(() => {
      calback(...args);
    }, delay);
  };
};
