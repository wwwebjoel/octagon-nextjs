'use client';

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'header',
  initialState: {
    activeTopMenuItem: 'perennials',
    activeBottomMenuItem: 'essence'
  },
  reducers: {
    activeTopMenuItemChanged: (state, action)=>{
      state.activeTopMenuItem = action.payload.item
    },
    activeBottomMenuItemChanged: (state, action)=>{
      state.activeBottomMenuItem = action.payload.item
    }
  },
});

export const { activeTopMenuItemChanged, activeBottomMenuItemChanged } = slice.actions;

export default slice.reducer;
