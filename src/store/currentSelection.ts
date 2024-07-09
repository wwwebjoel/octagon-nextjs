'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //If if stars selected then level = [6]
  prevLevel: [],
  level: [],
  id: -1,
  point: false,
  line: false,
  trapezoid: false,
  menuClicked: false
};

const slice = createSlice({
  name: 'currentSelection',
  initialState,
  reducers: {
    lineSelected: (state, action) => {
      state.prevLevel = state.level,
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= true
      state.point = false
      state.trapezoid = false
    },
    pointSelected: (state, action) => {
      state.prevLevel = state.level,
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= false
      state.point = true
      state.trapezoid = false
      },
    trapezoidSelected: (state, action) => {
      state.prevLevel = state.level,
      state.level = action.payload.level
      state.id = action.payload.id
      state.line= false
      state.point = false
      state.trapezoid = true
    },
    levelSelected: (state, action)=>{
      state.prevLevel = state.level,
      state.level = action.payload.level
    },

    menuClicked: (state, action)=>{
      state.menuClicked = action.payload.menuClicked}
  },
});

export const { lineSelected, pointSelected, trapezoidSelected, levelSelected, menuClicked} = slice.actions;

export default slice.reducer;