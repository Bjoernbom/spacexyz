/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from './app/store/store';

import Router from './app/navigation/Navigation';
import ThemeProvider from './app/services/theme/ThemeProvider';

export default function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
