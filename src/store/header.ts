'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  activeTopMenuItem: string;
  activeBottomMenuItem: string;
  activeMenuItem: string;
  previousActiveMenuItem: string
}

const initialState: HeaderState = {
  activeMenuItem: "",
  activeTopMenuItem: 'perennials',
  activeBottomMenuItem: 'essence',
  previousActiveMenuItem: '',
};

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    activeTopMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.previousActiveMenuItem = state.activeTopMenuItem;
      state.activeTopMenuItem = action.payload.item;
    },
    activeBottomMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.previousActiveMenuItem = state.activeBottomMenuItem;
      state.activeBottomMenuItem = action.payload.item;
    },
    activeMenuItemChanged: (state, action: PayloadAction<{ item: string }>) => {
      state.previousActiveMenuItem = state.activeMenuItem;
      state.activeMenuItem = action.payload.item;
    },
  },
});

export const { activeTopMenuItemChanged, activeBottomMenuItemChanged, activeMenuItemChanged } = slice.actions;

export default slice.reducer;

