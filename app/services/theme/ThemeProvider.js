import React, {useEffect} from 'react';
import {statusBar, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';

import {DARK_THEME, LIGHT_THEME} from '../../utils/colorUtils';

const themes = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export default function ThemeProvider({children}) {
  const {selectedTheme} = useSelector(state => state.theme);

  useEffect(() => {
    StatusBar.setBarStyle(
      selectedTheme === 'dark' ? 'light-content' : 'default',
    );
  }, [selectedTheme]);

  return (
    <StyledThemeProvider theme={themes[selectedTheme]}>
      {children}
    </StyledThemeProvider>
  );
}

ThemeProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};
