import { useTranslation } from 'react-i18next';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getLanguage } from '@/lib/utils';

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation();

  const onChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select defaultValue={getLanguage()} onValueChange={onChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={t('lang.placeholder')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t('lang.english')}</SelectItem>
        <SelectItem value="vi">{t('lang.vietnamese')}</SelectItem>
      </SelectContent>
    </Select>
  );
};
