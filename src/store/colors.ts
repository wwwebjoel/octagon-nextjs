'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: {
  activeColor: string;
  savedColors: {
    [key: number]: null | string;
  };
  propertiesColors: {
    [key: number]: null | string;
  };
} = {
  activeColor: '#FFFFFF',
  savedColors: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
  },
  propertiesColors: {
    1: '#FFAC01',
    2: '#B76EF9',
    3: '#9D6C32',
    4: '#7B952A',
    5: '#4154AA',
    6: '#4F81E5',
    7: '#FFA0CA',
    8: '#97C211'
  }
};

const slice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    activeColorChanged: (state, action)=>{
      state.activeColor = action.payload.color
    },

    colorSaved: (state, action)=>{
      state.savedColors[action.payload.position] = action.payload.color
    },

    propertiesColorChanged: (state, action)=>{
      state.propertiesColors[action.payload.position] = action.payload.color
    }
  
  },
});

export const { activeColorChanged, colorSaved , propertiesColorChanged} = slice.actions;

export default slice.reducer;