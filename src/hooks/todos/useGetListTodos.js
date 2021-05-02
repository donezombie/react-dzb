import Timer from 'helpers/timer';
import { useEffect, useState } from 'react';
import todosServices from 'services/todosServices';

const useGetListTodos = (filters) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (refetch) => {
    try {
      !refetch && setLoading(true);
      const response = await todosServices.getTodos();
      setData(response?.data || []);
      !refetch && setLoading(false);
    } catch (error) {
      setError(error);
      !refetch && setLoading(false);
    }
  };

  const refetch = () => {
    fetchData(true);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return [data, loading, error, refetch];
};

export default useGetListTodos;
