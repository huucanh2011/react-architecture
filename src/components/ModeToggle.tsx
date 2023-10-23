import { Sun, Moon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/providers/ThemeProvider';
import { ActionTooltip } from './ActionTooltip';

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ActionTooltip label="Switch theme" side="left" align="center">
      <Button variant="outline" size="icon" onClick={handleToggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Switch theme</span>
      </Button>
    </ActionTooltip>
  );
};
