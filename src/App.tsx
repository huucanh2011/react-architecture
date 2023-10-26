import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import './lib/i18n';
import RenderRouter from './routes';
import ToasterProvider from './components/providers/ToasterProvider';
import ModalProvider from './components/providers/ModalProvider';
import QueryProvider from './components/providers/QueryProvider';
import ProgressBar from './components/ProgressBar';
import ErrorFallbackRenderer from './components/ErrorFallbackRenderer';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { constants } from './config/constants';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey={constants.themeKey}>
      <QueryProvider>
        <ErrorBoundary fallbackRender={ErrorFallbackRenderer}>
          <Suspense fallback={<ProgressBar />}>
            <BrowserRouter>
              <RenderRouter />
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
        <ToasterProvider />
        <ModalProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
