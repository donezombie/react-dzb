import EachTodo from 'components/EachTodo';
import useGetListTodos from 'hooks/todos/useGetListTodos';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/modules/auth';
const HomePage = (props) => {
  const dispatch = useDispatch();
  const [data, loading, , refetch] = useGetListTodos(0);

  //! Function
  const onLogout = () => {
    dispatch(logout());
  };

  //! Render
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          refetch();
        }}
      >
        Stress test useSafeEffect
      </button>
      <button onClick={onLogout}>Logout</button>
      {loading ? (
        'Loading ...'
      ) : (
        <div className="container mx-auto p-3">
          <h3>List Todo</h3>
          <hr />
          {data.map((el) => (
            <EachTodo key={el.id} item={el} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
