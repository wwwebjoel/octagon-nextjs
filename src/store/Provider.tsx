'use client'
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import ConfigureStore from './configureStore';

interface ProvidersProps {
  children: ReactNode;
}

const store: Store = ConfigureStore();

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
