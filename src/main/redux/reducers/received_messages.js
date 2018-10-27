export default function(state=[], action) {
    switch(action.type) {
      case 'RECEIVED_MESSAGES':
        return action.payload;
      default:
        return state;
    }
  }
  