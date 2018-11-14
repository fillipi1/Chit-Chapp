export function selectUser(user){
  console.log('called')
  return {
    type: 'USER_SELECTED',
    payload: user
  };
}