import cookies from 'js-cookie';

const getItem = <T = unknown>(key: string): T | null => {
  const value = cookies.get(key);
  if (!value) return null;
  return JSON.parse(value);
};

const setItem = (
  key: string,
  value: unknown,
  options?: Cookies.CookieAttributes,
): void => {
  cookies.set(key, JSON.stringify(value), options);
};

const remove = (key: string): void => {
  cookies.remove(key);
};

export { getItem, setItem, remove };
