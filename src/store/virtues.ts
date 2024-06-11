import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Virtue {
  virtue: string;
  color: string | null;
}

const initialState: Virtue[] = [
  'courage',
  'empathy',
  'joy',
  'compassion',
  'peace',
  'love',
  'hope',
  'confidence',
  'kindness',
  'gratitude'
].map(virtue => ({ virtue, color: null }));

const virtuesSlice = createSlice({
  name: 'virtues',
  initialState,
  reducers: {
    addVirtue: (state, action: PayloadAction<{ virtue: string}>) => {
      const virtueToAdd = action.payload.virtue;
      if (!state.some(virtue => virtue.virtue === virtueToAdd)) {
        state.unshift({ virtue: virtueToAdd, color: null });
      }
    },
    addVirtueColor: (state, action: PayloadAction<{ virtue: string; color: string }>) => {

      const { virtue, color } = action.payload;
      const foundVirtue = state.find(item => item.virtue === virtue);
      if (foundVirtue) {
        foundVirtue.color = color;
      }
    },
    changeVirtue: (state, action: PayloadAction<{ newVirtue: string, index: number }>) => {
     
      const {newVirtue, index} = action.payload;
     state[index].virtue = newVirtue
    }
  }
});

export const { addVirtue, addVirtueColor, changeVirtue } = virtuesSlice.actions;

export default virtuesSlice.reducer;
