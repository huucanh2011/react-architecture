import type { Dispatch, SetStateAction } from 'react';

export declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyFunction = (...args: any[]) => any;
}

declare module 'react' {
  type SetState<S> = Dispatch<SetStateAction<S>>;
}
