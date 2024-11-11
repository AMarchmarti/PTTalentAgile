import { NavigateOptions, useSearchParams } from 'react-router-dom';

export const useNavigatorParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const get = (key: string) => {
    return searchParams.get(key);
  };

  const set = (key: string, value: string, options?: NavigateOptions) => {
    searchParams.set(key, value);
    setSearchParams(searchParams, { ...options });
  };

  const remove = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return {
    get,
    set,
    remove,
  };
};