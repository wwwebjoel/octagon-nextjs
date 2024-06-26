'use client';

import { combineReducers, Reducer } from 'redux';
import headerReducer from './header';
import trapezoidReducer from './trapezoid'
import octagonReducer from './octagon'
import anchorReducer from './anchor'
import currentSelectionReducer from './currentSelection';
import propertiesReducer from './properties'
import colorsReducer from './colors'
import modulesReducer from './modules'
import virtuesReducer from './virtues'
import linesReducer from './lines'

const rootReducer: Reducer = combineReducers({
  header: headerReducer,
  trapezoid: trapezoidReducer,
  octagon: octagonReducer,
  anchor: anchorReducer,
  currentSelection: currentSelectionReducer,
  properties: propertiesReducer,
  colors: colorsReducer,
  modules: modulesReducer,
  virtues: virtuesReducer,
  lines: linesReducer
});

export default rootReducer;
