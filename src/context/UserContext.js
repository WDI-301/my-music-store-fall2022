import { createContext, useReducer } from 'react';

const SIGN_IN = 'sign-in';
const SIGN_OUT = 'sign-out';

export const userContext = createContext();

// Reducer
// This called with the current state and action as argument every time an action is dispatched.
// Whatever the reducer returns becomes the new state;

const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return action.payload.userData;
    }
    case SIGN_OUT: {
      return undefined;
    }

    default: {
      return state;
    }
  }
};

function UserContextProvider(props) {
  const { children } = props;
  const userInitialState = undefined;

  const [user, dispatch] = useReducer(reducer, userInitialState);

  const signIn = (userData) => dispatch({ type: SIGN_IN, payload: { userData } });

  const signOut = () => dispatch({ type: SIGN_OUT });

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
