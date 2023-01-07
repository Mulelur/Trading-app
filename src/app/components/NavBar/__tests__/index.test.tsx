import * as React from 'react';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

import { NavBar } from '../index';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { configureAppStore } from 'store/configureStore';

const renderNavBar = (store: Store) =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="*" element={<NavBar />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );

describe('<NavBar />', () => {
  let renderedOutput: ReturnType<typeof renderNavBar>;

  beforeEach(() => {
    const store = configureAppStore();
    renderedOutput = renderNavBar(store);
  });

  it('should match snapshot', () => {
    expect(renderedOutput).toMatchSnapshot();
  });
});
