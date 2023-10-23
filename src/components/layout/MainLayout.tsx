import { Outlet } from 'react-router';

import { Sidebar } from '@/components/sidebar/Sidebar';
import { Navbar } from '@/components/navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <div className="flex flex-col h-full flex-1">
        <Navbar />
        <main className="h-full p-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
