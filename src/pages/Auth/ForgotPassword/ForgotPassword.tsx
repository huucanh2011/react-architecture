import { useTranslation } from 'react-i18next';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ForgotPasswordContainer } from '@/components/containers';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  useDocumentTitle(t('title.forgot_password'));

  return <ForgotPasswordContainer />;
};

export default ForgotPasswordPage;
