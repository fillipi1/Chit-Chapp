export default function(state=[], action) {
    switch(action.type) {
      case 'CONFERENCE_USER':
        return [...state, {user: action.payload}]
      default:
        return state;
    }
  }
  