import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { logger } from './logger';

interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState['isAuthenticated']) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: true,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    logger(
      (set) => ({
        ...initialState,
        setIsAuthenticated: (isAuthenticated) => {
          set(() => ({ isAuthenticated }));
        },
      }),
      'authStore',
    ),
    { name: 'authStore' },
  ),
);
