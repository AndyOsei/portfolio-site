import * as React from 'react';

import { useDataDispatch } from '../context';

export default (path: string) => {
  const dispatch = useDataDispatch();

  React.useEffect(() => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        path,
      },
    });
  }, [dispatch, path]);
};
