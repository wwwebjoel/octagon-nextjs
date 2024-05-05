"use client";

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const createStore = (): ReturnType<typeof configureStore> => {
  return configureStore({ reducer });
};

export default createStore;
