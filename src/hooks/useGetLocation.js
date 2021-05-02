import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';

export default () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!isEmpty(location?.state)) {
      setState(location?.state);

      history.replace({
        pathname: window.location.pathname,
        state: {},
      });
    }
  }, [location?.state]);

  return state;
};
