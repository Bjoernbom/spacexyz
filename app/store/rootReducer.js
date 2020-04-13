import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../services/theme/themeSlice';

export default combineReducers({
  theme: themeReducer,
});
