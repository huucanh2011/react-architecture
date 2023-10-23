import type { FallbackProps } from 'react-error-boundary';

const ErrorFallbackRenderer = ({ error }: FallbackProps) => {
  return (
    <div role="alert" className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-x-2">
        <h1 className="dark:text-white text-2xl">
          Oops! Something went wrong ...
        </h1>
        <h3 className="text-red-800 dark:text-orange-400">{error.message}</h3>
      </div>
    </div>
  );
};

export default ErrorFallbackRenderer;
