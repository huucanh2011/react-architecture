import { SelectLanguage } from '@/components/SelectLanguage';
import { ModeToggle } from '@/components/ModeToggle';
import { UserHeaderNavbar } from '@/components/header/UserHeaderNavbar';

export const HeaderNavbar = () => {
  return (
    <header className="h-[60px] w-full flex flex-row items-center justify-end border-b px-4">
      {/* <h1 className="text-xl font-semibold">Dashboard</h1> */}
      <div className="flex flex-row items-center gap-x-3">
        <ModeToggle />
        <SelectLanguage />
        <UserHeaderNavbar />
      </div>
    </header>
  );
};
