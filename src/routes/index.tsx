import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';

import MainLayout from '@/components/layout/MainLayout';
import AuthLayout from '@/components/layout/AuthLayout';
import WrapperRouteComponent from './config';
import { routerPath } from './routerPath';

const SignInPage = lazy(() => import('@/pages/Auth/SignIn'));
const ForgotPasswordPage = lazy(() => import('@/pages/Auth/ForgotPassword'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
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
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: routerPath.signIn,
        element: (
          <WrapperRouteComponent auth>
            <SignInPage />
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
