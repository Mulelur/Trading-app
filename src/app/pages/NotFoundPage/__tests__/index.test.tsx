import * as React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import { NotFoundPage } from '..';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const renderNotFoundPage = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <HelmetProvider>
            <Routes>
              <Route path="/" element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );

describe('<NotFoundPage />', () => {
  let component: ReturnType<typeof renderNotFoundPage>;

  beforeEach(() => {
    const store = configureAppStore();
    component = renderNotFoundPage(store);
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
