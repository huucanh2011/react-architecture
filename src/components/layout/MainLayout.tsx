import { Outlet } from 'react-router';

import { Sidebar } from '@/components/sidebar/Sidebar';
import { useGlobalStore } from '@/store/useGlobalStore';
import { Navbar } from '@/components/navbar/Navbar';
import { cn } from '@/lib/utils';

const MainLayout = () => {
  const { isMenuOpen } = useGlobalStore();

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navbar />
      <div className="flex h-full">
        <div
          className={cn(
            'flex flex-col fixed inset-y-0 h-full flex-shrink-0 transition-all top-[60px]',
            isMenuOpen ? 'w-[224px]' : 'w-[72px]',
          )}
        >
          <Sidebar />
        </div>
        <main
          className={cn(
            'h-full flex-1 ',
            isMenuOpen ? 'pl-[224px]' : 'pl-[72px]',
          )}
        >
          <div className="h-full p-[10px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
