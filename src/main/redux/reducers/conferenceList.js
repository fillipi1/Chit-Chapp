export default function(state=[], action) {
    switch(action.type) {
      case 'CONFERENCE_USER':
        return [...state, {user: action.payload}]
        case 'REMOVE_CONFERENCE_USER':
        return [...state.filter(user => user !== action.payload)]
      default:
        return state;
    }
  }
  