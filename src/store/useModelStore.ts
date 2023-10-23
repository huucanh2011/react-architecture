import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { logger } from './logger';

export type ModalType = 'confirm';

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
}

export interface ModalStore extends ModalState {
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const initialState: Pick<ModalStore, keyof ModalState> = {
  type: null,
  isOpen: false,
};

export const useModal = create<ModalStore>()(
  persist(
    logger(
      immer<ModalStore>((set) => ({
        ...initialState,
        onOpen: (type) => {
          set((state) => {
            state.isOpen = true;
            state.type = type;
          });
        },
        onClose: () => {
          set((state) => {
            state.type = null;
            state.isOpen = false;
          });
        },
      })),
      'modalStore',
    ),
    { name: 'modalStore' },
  ),
);
