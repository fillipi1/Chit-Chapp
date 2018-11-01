export function updateUsers(user){
  return {
    type: 'NEW_USER',
    payload: user
  };
}

export function loginUser(){
  console.log('called')
    firebase.auth().createUserWithEmailAndPassword('FillipiRocha1@impekable.com', 'testpassword').then((response) => {
      const MY_ID = response.user.uid;
      const MY_EMAIL = response.user.email;
        var userRef = firebase.database().ref('LoggedIn');
      userRef.push({
        id: MY_ID,
        name: 'Fillipi',
        email: MY_EMAIL,
      }).then(() => {
        return {
          type: 'LOG_IN',
          payload: logIn
        }
      })
      })
}
  
export function addUser(email, password, name){
  console.log('called')
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      const MY_ID = response.user.uid;
      const MY_EMAIL = response.user.email;
        var userRef = firebase.database().ref('USERS');
      userRef.push({
        id: MY_ID,
        name: name,
        email: MY_EMAIL,
        phone: password
      })
      })
}
  