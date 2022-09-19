import EachTodo from 'components/EachTodo';
import useGetListTodos from 'hooks/todos/useGetListTodos';
import { useAuthentication } from 'providers/AuthenticationProvider';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = (props) => {
  const { t } = useTranslation();
  const { logout } = useAuthentication();

  const [data, loading, , refetch] = useGetListTodos(0);

  //! Function
  const onLogout = () => {
    logout();
  };

  //! Render
  return (
    <div>
      <h3>{t('message:hello')}</h3>
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
