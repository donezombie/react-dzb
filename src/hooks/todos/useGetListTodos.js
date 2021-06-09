import { useEffect, useState } from 'react';
import todosServices from 'services/todosServices';

const useGetListTodos = (filters) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      const response = await todosServices.getTodos();
      setData(response?.data || []);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await todosServices.getTodos();
        setData(response?.data || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error, refetch];
};

export default useGetListTodos;
