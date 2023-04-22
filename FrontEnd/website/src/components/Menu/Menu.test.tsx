import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders learn react link', () => {
  const menuLinks = [
    {
      url: "www.google.com",
      text: "google"
    }
  ]

  render(<Menu menuLinks={menuLinks}/>);
});
