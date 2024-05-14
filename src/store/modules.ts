'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    landscape: true,
    octagon: false,
    anchorTips: false,
    chooseWordBox: false,
    wordsBox: false,
    propertiesBox: {
        active: false,
        type: {
            anchor: true,
            path: false,
            space: false,
        }
    }
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
        },
        anchorModuleActivated: state=>{
            state.propertiesBox.type.anchor = true
            state.propertiesBox.type.path = false
            state.propertiesBox.type.space = false
        },
        pathModuleActivated: state=>{
            state.propertiesBox.type.anchor = false
            state.propertiesBox.type.path = true
            state.propertiesBox.type.space = false
        },
        spaceModuleActivated: state=>{
            state.propertiesBox.type.anchor = false
            state.propertiesBox.type.path = false
            state.propertiesBox.type.space = true
        },
    },
});

export const { landscapeModuleDeactivated,
wordsBoxModuleActivated,
chooseWordBoxModuleActivated,
anchorTipsModuleDeactivated,anchorTipsModuleActivated,
octagonModuleDeactivated,
octagonModuleActivated,
anchorModuleActivated,
pathModuleActivated,
spaceModuleActivated} = slice.actions;

export default slice.reducer;