'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  activeColor: '#FFFFFF'
};

const slice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    activeColorChanged: (state, action)=>{
      state.activeColor = action.payload.color
    }
  
  },
});

export const { activeColorChanged } = slice.actions;

export default slice.reducer;