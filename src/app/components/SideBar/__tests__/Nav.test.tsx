import * as React from 'react';
import { Nav } from '../Nav';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const renderNav = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <HelmetProvider>
            <Routes>
              <Route path="*" element={<Nav />} />
            </Routes>
          </HelmetProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );

describe('<Nav />', () => {
  let component: ReturnType<typeof renderNav>;

  beforeEach(() => {
    const store = configureAppStore();
    component = renderNav(store);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
