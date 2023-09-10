import React from 'react';
import { Controller } from '../../adapters/Controller/Controller.ts';
import { ViewModel } from '../../adapters/Presenter/ViewModel.ts';

export type ContextType = {
  controller?: Controller;
  viewModel?: ViewModel;
};
export const Context = React.createContext<ContextType | null>(null);

export const Provider = Context.Provider;
