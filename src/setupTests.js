// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom has no real <canvas> 2D renderer, and this app's screens draw to a
// canvas on mount, so give getContext('2d') a no-op stub instead of null.
HTMLCanvasElement.prototype.getContext = () =>
  new Proxy(
    {},
    {
      get: (target, prop) =>
        prop in target ? target[prop] : () => {},
      set: (target, prop, value) => {
        target[prop] = value;
        return true;
      },
    }
  );
