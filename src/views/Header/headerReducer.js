const defaults = {
  greeting: 'Welcome to Chat App',
  
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'USER_SELECTED': {
      const { subGreeting } = action.payload;

      return { ...state, subGreeting };
    }
    default:
      return state;
  }
}
