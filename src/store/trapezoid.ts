'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrapezoidState {
    activeTrapezoidLevel: number;
    activeTrapezoidId: number;
}

const initialState: TrapezoidState = {
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
            state.activeTrapezoidId = -1;
        },

    },
});

export const { activeTrapezoidLevelChanged, activeTrapezoidIdChanged , clearActiveTrapezoid} = slice.actions;

export default slice.reducer;

