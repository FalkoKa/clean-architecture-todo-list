import { PresentableList } from '../../application/AddItemToList.ts';

export const createInitialViewModel = () => {
  return {
    global: {
      isLoading: true,
    },
  };
};

export type ViewModel = {
  global: {
    isLoading: boolean;
  };
  list?: PresentableList;
};
