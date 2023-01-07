import * as React from 'react';
import { PricingPage } from '..';
import { Store } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import renderer from 'react-test-renderer';

const renderPage = (store: Store) =>
  renderer.create(
    <MemoryRouter>
      <ThemeProvider theme={themes.light}>
        <HelmetProvider>
          <PricingPage />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<PricingPage />', () => {
  let notFoundPage: ReturnType<typeof renderPage>;

  beforeEach(() => {
    const store = configureAppStore();
    notFoundPage = renderPage(store);
  });

  it.skip('should match snapshot', () => {
    expect(notFoundPage).toMatchSnapshot();
  });
});
