import store from 'store';

const { dispatch } = store;

export function selectUser({user}) {
  
  return dispatch({
    type: 'SELECT_USER',
    payload: { user }
  });
}

