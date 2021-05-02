import { useRef } from 'react';
import httpServices from 'services/httpServices';

//* For cancel axios
const useGetSourceToken = () => {
  const source = useRef(httpServices.source());
  const cancelToken = source.current.token;
  const cancel = () => {
    source.current.cancel();
  };
  return {
    cancelToken,
    cancel,
  };
};

export default useGetSourceToken;
