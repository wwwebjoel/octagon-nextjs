'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  shape: '',
  color: '',
  size: -1,
  luminocity: '',
};

const slice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    sizeChanged: (state, action)=>{
      state.size = action.payload.size
    }
  
  },
});

export const { sizeChanged } = slice.actions;

export default slice.reducer;

