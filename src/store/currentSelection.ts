'use client';

import { createSlice } from '@reduxjs/toolkit';

// Define the state type
type SelectionState = {
  point: boolean;
  line: boolean;
  trapezoid: boolean;
};

// initialState with explicit type
const initialState: SelectionState = {
  point: false,
  line: false,
  trapezoid: false,
};

const slice = createSlice({
  name: 'currentSelection',
  initialState,
  reducers: {
    lineSelected: (state) => {
      Object.keys(state).forEach((key) => {
        state[key as keyof SelectionState] = key === 'line';
      });
    },
    pointSelected: (state) => {
        Object.keys(state).forEach((key) => {
          state[key as keyof SelectionState] = key === 'point';
        });
      },
      trapezoidSelected: (state) => {
        Object.keys(state).forEach((key) => {
          state[key as keyof SelectionState] = key === 'trapezoid';
        });
      },
  },
});

export const { lineSelected, pointSelected, trapezoidSelected } = slice.actions;

export default slice.reducer;
