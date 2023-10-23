import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { useAuthStore } from '@/store/useAuthStore';
import { routerPath } from './routerPath';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={routerPath.signIn} />
  );
};

export default PrivateRoute;
