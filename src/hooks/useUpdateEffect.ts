import { useEffect, useRef } from 'react';
import type { DependencyList, EffectCallback } from 'react';

export const useUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
) => {
  const mounted = useRef<boolean>();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
