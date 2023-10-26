import { SidebarToggle } from './SidebarToggle';
import { useGlobalStore } from '@/store/useGlobalStore';
import { cn } from '@/lib/utils';

export const NavigationSidebar = () => {
  const { isMenuOpen } = useGlobalStore();

  return (
    <aside
      className={cn(
        'flex flex-col items-center z-50 space-y-4 h-full text-white bg-zinc-800 w-60 py-3 z-90',
        isMenuOpen && 'w-20',
      )}
    >
      <SidebarToggle />
    </aside>
  );
};
