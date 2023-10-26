import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';

import WrapperRouteComponent from './config';
import { routerPath } from './routerPath';
import { AuthLayout, MainLayout } from '@/components/layouts';

const LoginPage = lazy(() => import('@/pages/Auth/Login'));
const ForgotPasswordPage = lazy(() => import('@/pages/Auth/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('@/pages/Auth/ResetPassword'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const UserListPage = lazy(() => import('@/pages/User'));
const NotfoundPage = lazy(() => import('@/pages/404'));

const lazyRoutes: RouteObject[] = [
  {
    path: routerPath.home,
    element: <MainLayout />,
    children: [
      {
        path: routerPath.dashboard,
        element: (
          <WrapperRouteComponent>
            <DashboardPage />
          </WrapperRouteComponent>
        ),
      },
      {
        path: routerPath.users,
        element: (
          <WrapperRouteComponent>
            <UserListPage />
          </WrapperRouteComponent>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: routerPath.login,
        element: (
          <WrapperRouteComponent auth>
            <LoginPage />
          </WrapperRouteComponent>
        ),
      },
      {
        path: routerPath.forgotPassword,
        element: (
          <WrapperRouteComponent auth>
            <ForgotPasswordPage />
          </WrapperRouteComponent>
        ),
      },
      {
        path: routerPath.resetPassword,
        element: (
          <WrapperRouteComponent auth>
            <ResetPasswordPage />
          </WrapperRouteComponent>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotfoundPage />,
  },
];

const RenderRouter: React.FC = () => {
  const element = useRoutes(lazyRoutes);
  return element;
};

export default RenderRouter;
