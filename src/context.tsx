import * as React from 'react';

type State = {
  path?: string;
};

type Action = { type: 'UPDATE_DATA'; payload: State };

type Dispatch = (action: Action) => void;

const initialState = {
  path: undefined,
};

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

const DataContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

const useDataState = () => {
  const state = React.useContext(DataContext);

  if (state === undefined) {
    throw new Error('useDataState must be used within a DataProvider"');
  }

  return state;
};

const useDataDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error('useDataState must be used within a DataProvider"');
  }

  return dispatch;
};

export { DataProvider, useDataState, useDataDispatch };
