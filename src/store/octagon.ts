"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Trapezoid {
  selected: boolean;
  data: string | number | null;
}

interface Level {
  level: number;
  selected: boolean;
  trapezoid: { [key: number]: Trapezoid };
}

interface State {
  [key: string]: Level;
}

const initialState: State = {
  level2: {
    level: 2,
    selected: false,
    trapezoid: {
      1: { selected: false, data: null },
      2: { selected: false, data: null },
      3: { selected: false, data: null },
      4: { selected: false, data: null },
      5: { selected: false, data: null },
      6: { selected: false, data: null },
      7: { selected: false, data: null },
      8: { selected: false, data: null },
    },
  },
  level3: {
    level: 3,
    selected: false,
    trapezoid: {
      1: { selected: false, data: null },
      2: { selected: false, data: null },
      3: { selected: false, data: null },
      4: { selected: false, data: null },
      5: { selected: false, data: null },
      6: { selected: false, data: null },
      7: { selected: false, data: null },
      8: { selected: false, data: null },
    },
  },
  level4: {
    level: 4,
    selected: false,
    trapezoid: {
      1: { selected: false, data: null },
      2: { selected: false, data: null },
      3: { selected: false, data: null },
      4: { selected: false, data: null },
      5: { selected: false, data: null },
      6: { selected: false, data: null },
      7: { selected: false, data: null },
      8: { selected: false, data: null },
    },
  },
};

const slice = createSlice({
  name: "octagon",
  initialState,
  reducers: {
    trapezoidSelectionChanged: (
      state,
      action: PayloadAction<{
        level: number;
        levelSelected: boolean;
        id: number;
        selected: boolean;
        data: string | number | null;
      }>
    ) => {
      const { level, levelSelected, id, selected, data } = action.payload;
      const tempObj = state[`level${level}`];
      tempObj.selected = levelSelected || false;
      tempObj.trapezoid[id].selected = selected;
      tempObj.trapezoid[id].data = data;
    },
    newTrapezoidSelected: (state, action) => {
      const { level, id } = action.payload;
      const tempObj = state[`level${level}`];
      Object.keys(state).forEach((levelKey) => {
        const level = state[levelKey];
        const trapezoid = level.trapezoid;
        if (trapezoid) {
          Object.keys(trapezoid).forEach((trapezoidKey) => {
            trapezoid[Number(trapezoidKey)].selected = false;
          });
        }
      });
      tempObj.trapezoid[id].selected = true;
    },

    trapezoidDataWritten: (
      state,
      action: { payload: { data?: string | number | null } }
    ) => {
      Object.keys(state).forEach((levelKey) => {
        const trapezoids = state[levelKey].trapezoid;
        if (trapezoids) {
          Object.keys(trapezoids).forEach((key) => {
            let trapezoid = trapezoids[Number(key)];
            if (action.payload.data) {
              if (trapezoid.selected && !trapezoid.data) {
                trapezoid.data = action.payload.data;
              }
            }
          });
        }
      });
    },

    trapezoidDataDeleted: (
        state : any,
        action
    ) => {
      const {data, id, level} = action.payload
      if(state[`level${level}`].trapezoid[id].data === data){
        state[`level${level}`].trapezoid[id].data = null
      }
    },

    applyDataToLevel: (state, action) => {
      const { level, id } = action.payload;
      const levelKey = `level${level}`;
      const data = state[levelKey].trapezoid[id].data

      Object.keys(state[levelKey].trapezoid).forEach((key: any) => {
        if (!state[levelKey].trapezoid[key].data) {
          state[levelKey].trapezoid[key].data = data;
        }
      });
    }
  },
});

export const {
  trapezoidSelectionChanged,
  newTrapezoidSelected,
  trapezoidDataWritten,
  trapezoidDataDeleted,
  applyDataToLevel
} = slice.actions;

export default slice.reducer;
