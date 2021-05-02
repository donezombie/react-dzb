import useGetSourceToken from 'hooks/useGetSourceToken';
import { useEffect, useState } from 'react';
import todosServices from 'services/todosServices';

const useGetListTodos = (filters) => {
  const { cancelToken, cancel } = useGetSourceToken();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (refetch) => {
    try {
      !refetch && setLoading(true);
      const response = await todosServices.getTodos({ cancelToken });
      setData(response?.data || []);
      !refetch && setLoading(false);
    } catch (error) {
      setError(error);
      !refetch && setLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();

    return () => {
      //* Cleanup
      cancel();
    };
  }, []);

  return [data, loading, error, refetch];
};

export default useGetListTodos;
