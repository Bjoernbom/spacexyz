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
import {createStore} from '../store/store';

import Router from '../navigation/Navigation';
import ThemeProvider from '../services/theme/ThemeProvider';

export default function App() {
  const store = createStore();
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
