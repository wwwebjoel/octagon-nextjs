'use client';

import { combineReducers, Reducer } from 'redux';
import entitiesReducer from './entities';

const rootReducer: Reducer = combineReducers({
  entities: entitiesReducer,
});

export default rootReducer;
