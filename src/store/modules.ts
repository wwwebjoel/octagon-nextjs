'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    landscape: true,
    octagon: false,
    anchorTips: false,
    chooseWordBox: false,
    wordsBox: false,
};

const slice = createSlice({
    name: 'modules',
    initialState,
    reducers: {
        landscapeModuleDeactivated: state=>{
            state.landscape = false;
        },
        octagonModuleActivated:state=>{
            state.octagon = true;
        },
        octagonModuleDeactivated:state=>{
            state.octagon = false;
        },
        anchorTipsModuleActivated: state=>{
            state.anchorTips = true;
        },
        anchorTipsModuleDeactivated: state=>{
            state.anchorTips = false;
        },
        wordsBoxModuleActivated: state=>{
            state.wordsBox = true;
        },
        chooseWordBoxModuleActivated: state=>{
            state.chooseWordBox = true;
        }
    },
});

export const { landscapeModuleDeactivated,
wordsBoxModuleActivated,
chooseWordBoxModuleActivated,
anchorTipsModuleDeactivated,anchorTipsModuleActivated,
octagonModuleDeactivated,
octagonModuleActivated} = slice.actions;

export default slice.reducer;