'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: {
  activeColor: string;
  savedColors: {
    [key: number]: null | string;
  };
} = {
  activeColor: '#FFFFFF',
  savedColors: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
  }
};

const slice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    activeColorChanged: (state, action)=>{
      state.activeColor = action.payload.color
    },

    colorSaved: (state, action)=>{
      state.savedColors[action.payload.position] = action.payload.color
    }
  
  },
});

export const { activeColorChanged, colorSaved } = slice.actions;

export default slice.reducer;