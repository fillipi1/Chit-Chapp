import store from 'store';

const { dispatch } = store;

export function placeholder() {
  // Wrapping the returned object in the dispatch() call is unconventional,
  // but the conventional method of mapping dispatch to props and importing
  // the action is unnecessarily redundant
  return dispatch({
    type: 'APP_EXAMPLE_ACTION'
  });
}
