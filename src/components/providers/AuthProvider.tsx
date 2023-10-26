import { PropsWithChildren, createContext, useContext } from 'react';

type AuthUser = {
  user: unknown;
};

const AuthProviderContext = createContext<AuthUser | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContext');
  }
  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useAuth();
  return (
    <AuthProviderContext.Provider value={auth}>
      {children}
    </AuthProviderContext.Provider>
  );
};
