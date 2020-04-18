import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedId: '',
};

function setRocketId(state, action) {
  const selectedId = action.payload;
  state.selectedId = selectedId;
}

function getRocketId(state, action) {
  const {selectedId} = action.payload;
  state.selectedId = selectedId;
}

const rocketIdSlice = createSlice({
  name: 'rocketId',
  initialState,
  reducers: {
    setRocketDetailId: setRocketId,
    getRocketDetailId: getRocketId,
  },
});

export const {setRocketDetailId, getRocketDetailId} = rocketIdSlice.actions;

export default rocketIdSlice.reducer;
