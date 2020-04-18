import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../services/theme/themeSlice';
import rocketIdReducer from '../features/rockets/RocketIdSlice';

export default combineReducers({
  theme: themeReducer,
  rocketDetailId: rocketIdReducer,
});
