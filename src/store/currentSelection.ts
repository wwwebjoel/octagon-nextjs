'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //If if stars selected then level = [6]
  level: [],
  id: -1,
  point: false,
  line: false,
  trapezoid: false,
};

const slice = createSlice({
  name: 'currentSelection',
  initialState,
  reducers: {
    lineSelected: (state, action) => {
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= true
      state.point = false
      state.trapezoid = false
    },
    pointSelected: (state, action) => {
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= false
      state.point = true
      state.trapezoid = false
      },
    trapezoidSelected: (state, action) => {
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= false
      state.point = false
      state.trapezoid = true
    },
    levelSelected: (state, action)=>{
      state.level = action.payload.level
    }
  },
});

export const { lineSelected, pointSelected, trapezoidSelected, levelSelected} = slice.actions;

export default slice.reducer;