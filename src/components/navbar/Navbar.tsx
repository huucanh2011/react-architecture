import { SelectLanguage } from '@/components/SelectLanguage';
import { ModeToggle } from '@/components/ModeToggle';
import { UserNavbar } from '@/components/navbar/UserNavbar';

export const Navbar = () => {
  return (
    <nav className="h-[60px] w-full flex flex-row items-center justify-between border-b px-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex flex-row items-center gap-x-3">
        <ModeToggle />
        <SelectLanguage />
        <UserNavbar />
      </div>
    </nav>
  );
};
