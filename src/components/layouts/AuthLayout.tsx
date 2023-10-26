import { Outlet } from 'react-router';

import { ModeToggle } from '@/components/ModeToggle';

const AuthLayout = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
