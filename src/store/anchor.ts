"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Point {
  id: number;
  selected: boolean;
  shape: string;
  size: string;
  color: string;
  luminocity: string;
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
  size: '2px',
  color: 'FFAC01',
  luminocity: '100%',
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
      console.log('anchorPointShapeChanged')
      const { id, level, shape } = action.payload;
      state[`level${level}`].point[id].shape = shape;
    }
  },
});

export const {
  anchorPointSelected,
  anchorPointsSelectionReset,
  anchorPointShapeChanged
} = anchorSlice.actions;

export default anchorSlice.reducer;
