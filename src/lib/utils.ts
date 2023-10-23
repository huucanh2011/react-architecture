import i18next from 'i18next';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLanguage = () => {
  return (
    i18next.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLang) ||
    'en'
  );
};
