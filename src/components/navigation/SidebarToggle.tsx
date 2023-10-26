import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useGlobalStore } from '@/store/useGlobalStore';

export const SidebarToggle = () => {
  const { isMenuOpen, toggleMenu } = useGlobalStore();

  const Icon = isMenuOpen ? ChevronLeft : ChevronRight;

  return (
    <button onClick={toggleMenu} className="group flex items-center">
      <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center dark:bg-zinc-800 group-hover:bg-gray-400">
        <Icon
          className="group-hover:text-primary transition text-white"
          size={25}
        />
      </div>
    </button>
  );
};
