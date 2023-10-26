import { useTranslation } from 'react-i18next';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { LoginContainer } from '@/components/containers';

const LoginPage = () => {
  const { t } = useTranslation();

  useDocumentTitle(t('title.login'));

  return <LoginContainer />;
};

export default LoginPage;
