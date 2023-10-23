import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { useAuthStore } from '@/store/useAuthStore';
import { routerPath } from './routerPath';

const PublicRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  return isAuthenticated ? (
    <Navigate to={routerPath.dashboard} />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
