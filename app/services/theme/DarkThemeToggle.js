import React, {useEffect, useState} from 'react';
import {Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {changeSelectedTheme} from './themeSlice';

export default function DarkThemeToggle() {
  const dispatch = useDispatch();
  const {selectedTheme} = useSelector(state => state.theme);

  const [isDarkTheme, setDarkTheme] = useState(selectedTheme === 'dark');

  useEffect(() => {
    dispatch(changeSelectedTheme(isDarkTheme ? 'dark' : 'light'));
  }, [dispatch, isDarkTheme]);

  function handleValueChange(value) {
    setDarkTheme(value);
  }

  return <Switch value={isDarkTheme} onValueChange={handleValueChange} />;
}
