import { SidebarToggle } from './SidebarToggle';

export const Sidebar = () => {
  return (
    <aside className="space-y-4 flex flex-col items-center h-full text-white bg-zinc-800 w-full py-3 z-90">
      <SidebarToggle />
    </aside>
  );
};
