import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { getItem, setItem } from '@/lib/localStorage';
import { logger } from './logger';

interface GlobalState {
  isMenuOpen: boolean;
}

export interface GlobalStore extends GlobalState {
  toggleMenu: () => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isMenuOpen: getItem('isMenuOpen') ?? false,
};

export const useGlobalStore = create<GlobalStore>()(
  persist(
    logger(
      immer<GlobalStore>((set) => ({
        ...initialState,
        toggleMenu: () => {
          set((state) => {
            setItem('isMenuOpen', !state.isMenuOpen);
            state.isMenuOpen = !state.isMenuOpen;
          });
        },
      })),
      'globalStore',
    ),
    { name: 'globalStore' },
  ),
);
