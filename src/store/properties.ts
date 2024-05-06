'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  shape: '',
  color: '',
  luminocity: '',
};

const slice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
  
  },
});

export const {  } = slice.actions;

export default slice.reducer;

