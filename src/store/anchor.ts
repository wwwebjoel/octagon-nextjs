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

const initialState: AnchorState = {
    level1: {
      level: 1,
      selected: false,
      point: {
        1: {
          id: 1,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        2: {
          id: 2,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        3: {
          id: 3,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        4: {
          id: 4,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        5: {
          id: 5,
          selected: false,
          shape: "unity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        6: {
          id: 6,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        7: {
          id: 7,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        8: {
          id: 8,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
      },
    },
    level2: {
      level: 2,
      selected: false,
      point: {
        1: {
          id: 1,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        2: {
          id: 2,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        3: {
          id: 3,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        4: {
          id: 4,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        5: {
          id: 5,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        6: {
          id: 6,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        7: {
          id: 7,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        8: {
          id: 8,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
      },
    },
    level3: {
      level: 3,
      selected: false,
      point: {
        1: {
          id: 1,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        2: {
          id: 2,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        3: {
          id: 3,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        4: {
          id: 4,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        5: {
          id: 5,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        6: {
          id: 6,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        7: {
          id: 7,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        8: {
          id: 8,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
      },
    },
    level4: {
      level: 4,
      selected: false,
      point: {
        1: {
          id: 1,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        2: {
          id: 2,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        3: {
          id: 3,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        4: {
          id: 4,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        5: {
          id: 5,
          selected: false,
          shape: "patience",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        6: {
          id: 6,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
  
        7: {
          id: 7,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
        8: {
          id: 8,
          selected: false,
          shape: "clarity",
          size: "2px",
          color: "FFAC01",
          luminocity: "100%",
        },
      },
    },
  };


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
    }
  },
});

export const {
  anchorPointSelected,
  anchorPointsSelectionReset
} = anchorSlice.actions;

export default anchorSlice.reducer;
