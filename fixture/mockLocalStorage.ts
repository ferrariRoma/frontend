export const mockLocalStorage = (func: jest.Mock<any>) => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: func,
      removeItem: jest.fn(),
    },
    writable: true,
  });
};
