import React from 'react';
import { render } from '@testing-library/react';
import Tracks from './Tracks';

test('renders learn react link', () => {
  const { getByText } = render(<Tracks />);
  const linkElement = getByText(/player/i);
  expect(linkElement).toBeInTheDocument();
});
