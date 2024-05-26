'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  activeTopMenuItem: string;
  activeBottomMenuItem: string;
}

const initialState: HeaderState = {
  activeTopMenuItem: 'perennials',
  activeBottomMenuItem: 'essence',
};

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    activeTopMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.activeTopMenuItem = action.payload.item;
    },
    activeBottomMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.activeBottomMenuItem = action.payload.item;
      console.log(state.activeBottomMenuItem)
    },
  },
});

export const { activeTopMenuItemChanged, activeBottomMenuItemChanged } = slice.actions;

export default slice.reducer;

