export default function loggedin(state = {}, action){
    switch(action.type) {
        case 'NEW_AGENT':
          return action.payload;
        default:
          return state;
      }
    }