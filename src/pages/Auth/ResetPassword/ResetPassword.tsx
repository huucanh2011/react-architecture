import { useTranslation } from 'react-i18next';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ResetPasswordContainer } from '@/components/containers';

const ResetPasswordPage = () => {
  const { t } = useTranslation();

  useDocumentTitle(t('title.reset_password'));

  return <ResetPasswordContainer />;
};

export default ResetPasswordPage;
