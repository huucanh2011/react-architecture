import { Toaster } from 'sonner';

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        duration: 5000,
      }}
    />
  );
};

export default ToasterProvider;
