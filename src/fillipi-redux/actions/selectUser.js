export function selectUser(user){
  console.log('you selected '+ user.name)
  return {
    type: 'USER_SELECTED',
    payload: user
  };
}