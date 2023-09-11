import React from 'react';
import { Controller } from '../../adapters/Controller/Controller.ts';

export type ContextType = {
  controller?: Controller;
};

export const Context = React.createContext<ContextType | null>(null);

export const Provider = Context.Provider;
