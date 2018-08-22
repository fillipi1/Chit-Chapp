import store from 'store';

const { dispatch } = store;

export function setSubGreeting({ subGreeting }) {
  // Destructure and restructure the payload so it is
  // easy to see what is being passed as the payload

  // Any logic should be preformed in the action, prior to dispatching
  const propCaseGreeting = stringToProperCase(subGreeting);

  // Wrapping the returned object in the dispatch() call is unconventional,
  // but the conventional method of mapping dispatch to props and importing
  // the action is unnecessarily redundant
  return dispatch({
    type: 'SET_SUBGREETING',
    payload: { subGreeting: propCaseGreeting }
  });
}

function stringToProperCase(inputString) {
  return inputString.split(' ').map(word => {
    const chars = word.split('');

    chars[0] = chars[0].toUpperCase();

    return chars.join('');
  }).join(' ');
}
