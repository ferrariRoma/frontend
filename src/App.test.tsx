import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  describe('', () => {
    it('렌더링', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
