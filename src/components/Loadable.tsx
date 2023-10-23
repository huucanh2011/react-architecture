/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, lazy } from 'react';

const Loadable = (
  importFunc: () => Promise<{ default: any }>,
  fallback: React.ReactNode | null,
) => {
  const LazyComponent = lazy(importFunc);
  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default Loadable;
