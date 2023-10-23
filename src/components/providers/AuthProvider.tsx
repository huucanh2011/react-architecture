import { PropsWithChildren } from 'react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default AuthProvider;
