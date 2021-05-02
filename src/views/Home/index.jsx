import useGetListTodos from 'hooks/todos/useGetListTodos';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/modules/auth';

const HomePage = (props) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [data, loading, error, refetch] = useGetListTodos(number);

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
        <Fragment>
          <h3>List Todo</h3>
          <hr />
          {data.map((el) => (
            <div key={el.id}>
              {el.id} - {el.title}
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};
export default HomePage;
