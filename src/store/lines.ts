"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Line {
  id: number;
  selected: boolean;
  type: string | null;
  size: number;
  color: string | null;
  luminosity: number;
}

interface Level {
  level: number;
  selected: boolean;
  line: { [key: string]: Line };
}

interface InitialState {
  [key: string]: Level;
}

const defaultLine = {
  selected: false,
  type: null,
  size: 20,
  color: null,
  luminosity: 70,
};

const createLine = (id: number) => ({ id, ...defaultLine });


const createLevel = (level: number) => ({
  level,
  selected: false,
  line: Object.fromEntries(
    Array(8).fill(null).map((_, i) => [i + 1, createLine(i + 1)])
  ),
});
const createInitialState = ()=>{

const initialState: InitialState = {};
  for (let i = 1; i <= 4; i++) {
    initialState[`level${i}`] = createLevel(i);
  }
  return initialState;
}

const initialState = createInitialState();

interface AnchorLineSelectedPayload {
  id: number;
  level: number;
}

const lineSlice = createSlice({
  name: "lines",
  initialState,
  reducers: {
    lineSelected: (state, action: PayloadAction<AnchorLineSelectedPayload>) => {
      const { id, level } = action.payload;
      state[`level${level}`].line[id].selected = true;
    },
    linesSelectionReset: (state) => {
      Object.keys(state).forEach(levelKey => {
        Object.keys(state[levelKey].line).forEach(lineKey => {
          state[levelKey].line[lineKey].selected = false;
        });
      });
    },
    lineTypeChanged: (state, action)=>{
      const { id, level, type } = action.payload;
      state[`level${level}`].line[id].type = type;
    },
    lineSizeChanged: (state, action)=>{
      const { id, level, size } = action.payload;
      state[`level${level}`].line[id].size = size;
    },
    lineLuminosityChanged: (state, action)=>{
      const { id, level, luminosity } = action.payload;
      state[`level${level}`].line[id].luminosity = luminosity;
    },
    lineColorChanged: (state, action)=>{
      const { id, level, color } = action.payload;
      state[`level${level}`].line[id].color = color;
    }
  },
});

export const {
  lineSelected,
  linesSelectionReset,
  lineTypeChanged,
  lineSizeChanged,
    lineColorChanged,
    lineLuminosityChanged
} =  lineSlice.actions;

export default lineSlice.reducer;
