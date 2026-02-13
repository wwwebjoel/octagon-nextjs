"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Trapezoid {
  selected: boolean;
  data: string | number | null;
  color: string | null;
}

interface Level {
  level: number;
  selected: boolean;
  trapezoid: { [key: number]: Trapezoid };
}

interface State {
  [key: string]: Level;
}

const generateTrapezoid = (): { [key: number]: Trapezoid } => {
  const trapezoid: { [key: number]: Trapezoid } = {};
  for (let i = 1; i <= 8; i++) {
    trapezoid[i] = { selected: false, data: null , color: null};
  }
  return trapezoid;
};

// Pre-populate skill data for portfolio display
const skillsByLevel: { [level: string]: { [key: number]: string } } = {
  level2: {
    1: "React",
    2: "Next.js",
    3: "Node.js",
    4: "Laravel",
    5: "WordPress",
    6: "TypeScript",
    7: "REST APIs",
    8: "SQL",
  },
  "level2.5": {
    1: "GoHighLevel",
    2: "N8N",
    3: "Zapier",
    4: "ActiveCampaign",
    5: "GTM",
    6: "Meta Pixel",
    7: "Hotjar",
    8: "Webhooks",
  },
  level3: {
    1: "Figma",
    2: "Tailwind CSS",
    3: "GSAP",
    4: "Framer Motion",
    5: "Elementor",
    6: "Divi",
    7: "NoSQL",
    8: "Git",
  },
  level4: {
    1: "Web Apps",
    2: "WP Builds",
    3: "Funnels & CRM",
    4: "Tracking Setup",
    5: "Automation",
    6: "Analytics",
    7: "Web Ops",
    8: "Integrations",
  },
};

const generateLevels = (): State => {
  const levels: State = {};
  [2, 2.5, 3, 4].forEach((i) => {
    const levelKey = `level${i}`;
    const trapezoid = generateTrapezoid();
    const preloaded = skillsByLevel[levelKey];
    if (preloaded) {
      for (let k = 1; k <= 8; k++) {
        trapezoid[k].data = preloaded[k] ?? null;
      }
    }
    levels[levelKey] = {
      level: i,
      selected: false,
      trapezoid,
    };
  });
  return levels;
};

const initialState: State = generateLevels();

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
