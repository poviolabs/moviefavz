import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
