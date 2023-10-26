import { Outlet } from 'react-router';

import { HeaderNavbar } from '@/components/header/HeaderNavbar';
import { NavigationSidebar } from '@/components/navigation/NavigationSidebar';

const MainLayout = () => {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <NavigationSidebar />
      <div className="flex-1 flex flex-col h-full">
        <HeaderNavbar />
        <main className="h-full p-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
