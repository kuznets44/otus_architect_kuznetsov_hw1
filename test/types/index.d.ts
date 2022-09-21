export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveEqualValues(): R;
    }
  }
}