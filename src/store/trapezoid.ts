'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrapezoidState {
    selectedTrapezoidLevel: number;
    selectedTrapezoidId: number;
    activeTrapezoidLevel: number;
    activeTrapezoidId: number;
}

const initialState: TrapezoidState = {
    selectedTrapezoidLevel: 2,
    selectedTrapezoidId: 1,
    activeTrapezoidLevel: 2,
    activeTrapezoidId: 1,
};

const slice = createSlice({
    name: 'trapezoid',
    initialState,
    reducers: {
        activeTrapezoidLevelChanged: (state, action: PayloadAction<{ level: number }>) => {
            state.activeTrapezoidLevel = action.payload.level;
        },
        activeTrapezoidIdChanged: (state, action: PayloadAction<{ id: number }>) => {
            state.activeTrapezoidId = action.payload.id;
        },
        clearActiveTrapezoid: (state, action: PayloadAction<{ id: number }>) => {
            state.activeTrapezoidId = -1;
            state.activeTrapezoidLevel = -1;
        },
        selectedTrapezoidLevelChanged: (state, action: PayloadAction<{ level: number }>) => {
            state.selectedTrapezoidLevel = action.payload.level;
        },
        selectedTrapezoidIdChanged: (state, action: PayloadAction<{ id: number }>) => {
            state.selectedTrapezoidId = action.payload.id;
        },
        clearSelectedTrapezoid: (state, action: PayloadAction<{ id: number }>) => {
            state.selectedTrapezoidId = -1;
            state.selectedTrapezoidLevel = -1;
        },

    },
});

export const { activeTrapezoidLevelChanged, activeTrapezoidIdChanged , clearActiveTrapezoid, selectedTrapezoidLevelChanged, selectedTrapezoidIdChanged, clearSelectedTrapezoid} = slice.actions;

export default slice.reducer;

