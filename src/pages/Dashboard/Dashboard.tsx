import { useTranslation } from 'react-i18next';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const DashboardPage = () => {
  const { t } = useTranslation();

  useDocumentTitle(t('title.dashboard'));

  return <div>Dashboard page</div>;
};

export default DashboardPage;
