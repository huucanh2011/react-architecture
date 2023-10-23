import { RouteProps } from 'react-router';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

export type WrapperRouteProps = RouteProps & {
  auth?: boolean;
};

const WrapperRouteComponent = ({ auth, children }: WrapperRouteProps) => {
  return auth ? (
    <PublicRoute>{children}</PublicRoute>
  ) : (
    <PrivateRoute>{children}</PrivateRoute>
  );
};

export default WrapperRouteComponent;
