import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type ConfirmModalProps = {
  onConfirm: () => void;
};

export const ConfirmModal = ({
  children,
  onConfirm,
}: PropsWithChildren<ConfirmModalProps>) => {
  const { t } = useTranslation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('confirm_modal.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('confirm_modal.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('btn.cancel')}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {t('btn.continue')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
