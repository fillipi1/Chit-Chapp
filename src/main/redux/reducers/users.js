const customers = {
  loading: false,
  users: [],
  error: ''
}

export default function(state = customers, action) {
  switch(action.type) {
      case "LOAD_USER":
        return {...state, loading: true}
      case "USER_LOAD_COMPLETE":
       return {...state, users: action.payload, loading: false}
      case "LOAD_ERROR":
       return {...state, error: action.payload}
      default:
        return state;
  }
}
  