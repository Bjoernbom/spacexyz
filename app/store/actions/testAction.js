import {SET_TEXT} from '../../types/types';

export const testAction = data => {
  return {
    type: SET_TEXT,
    payload: {
      data,
    },
  };
};
