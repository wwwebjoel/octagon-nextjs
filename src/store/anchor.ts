"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Point {
  id: number;
  selected: boolean;
  shape: string;
  size: number;
  color: string | null;
  luminosity: number;
}

interface Level {
  level: number;
  selected: boolean;
  point: { [key: string]: Point };
}

interface AnchorState {
  [key: string]: Level;
}

const defaultPoint = {
  selected: false,
  shape: 'clarity',
  size: 20,
  color: null,
  luminosity: 70,
};

const createPoint = (id: number) => ({ id, ...defaultPoint });


const createLevel = (level: number) => ({
  level,
  selected: false,
  point: Object.fromEntries(
    Array(8).fill(null).map((_, i) => [i + 1, createPoint(i + 1)])
  ),
});
const createInitialState = ()=>{

const initialState: AnchorState = {};
  for (let i = 1; i <= 4; i++) {
    initialState[`level${i}`] = createLevel(i);
  }
  return initialState;
}

const initialState = createInitialState();

interface AnchorPointSelectedPayload {
  id: number;
  level: number;
}

const anchorSlice = createSlice({
  name: "anchor",
  initialState,
  reducers: {
    anchorPointSelected: (state, action: PayloadAction<AnchorPointSelectedPayload>) => {
      const { id, level } = action.payload;
      state[`level${level}`].point[id].selected = true;
    },
    anchorPointsSelectionReset: (state) => {
      Object.keys(state).forEach(levelKey => {
        Object.keys(state[levelKey].point).forEach(pointKey => {
          state[levelKey].point[pointKey].selected = false;
        });
      });
    },
    anchorPointShapeChanged: (state, action)=>{
      const { id, level, shape } = action.payload;
      state[`level${level}`].point[id].shape = shape;
    },
    anchorPointSizeChanged: (state, action)=>{
      const { id, level, size } = action.payload;
      state[`level${level}`].point[id].size = size;
    },
    anchorPointLuminosityChanged: (state, action)=>{
      const { id, level, luminosity } = action.payload;
      state[`level${level}`].point[id].luminosity = luminosity;
    },
    anchorPointColorChanged: (state, action)=>{
      const { id, level, color } = action.payload;
      state[`level${level}`].point[id].color = color;
    }
  },
});

export const {
  anchorPointSelected,
  anchorPointsSelectionReset,
  anchorPointShapeChanged,
  anchorPointSizeChanged,
    anchorPointColorChanged,
    anchorPointLuminosityChanged
} = anchorSlice.actions;

export default anchorSlice.reducer;
