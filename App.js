/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './app/navigation/Navigation';
import {createStore} from './app/store/store';
import ThemeProvider from './app/services/theme/ThemeProvider';

export default function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
}
