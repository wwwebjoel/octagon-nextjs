'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  activeTopMenuItem: string;
  activeBottomMenuItem: string;
  activeMenuItem: string;
}

const initialState: HeaderState = {
  activeMenuItem: "",
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
    },
    activeMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.activeMenuItem = action.payload.item;
    },
  },
});

export const { activeTopMenuItemChanged, activeBottomMenuItemChanged, activeMenuItemChanged } = slice.actions;

export default slice.reducer;

