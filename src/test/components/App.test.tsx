import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  describe('유저가 접속하면', () => {
    it('화면을 렌더링 합니다.', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
