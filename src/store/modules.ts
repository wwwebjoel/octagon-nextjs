'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  landscape: true,
    anchorTips: false,
};

const slice = createSlice({
    name: 'modules',
    initialState,
    reducers: {
        landscapeModuleDeactivated: state=>{
            state.landscape = false;
        }
    },
});

export const { landscapeModuleDeactivated } = slice.actions;

export default slice.reducer;

