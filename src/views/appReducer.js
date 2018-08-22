const defaults = {
  example: 'Example default state'
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'APP_EXAMPLE_ACTION': {
      console.log('An action was fired and the state changed');

      return {
        ...state,
        example: 'Examples are RAD!'
      };
    }
    default:
      return state;
  }
}
