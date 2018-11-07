export function updateUsers(user){
  return {
    type: 'NEW_USER',
    payload: user
  };
}

export function loginUser(){
  console.log('called')
  firebase.auth().createUserWithEmailAndPassword('FillipiRochat@impekable.com', 'testpassword').then((response) => {
    const MY_ID = response.user.uid;
    const MY_EMAIL = response.user.email;
    var userRef = firebase.database().ref('agent');
    userRef.push({
      id: MY_ID,
      name: 'Fillipi',
      email: MY_EMAIL,
      phone: "+15103437234"
    }).then(() => {
      return {
        type: 'LOG_IN',
      payload: user
      }
    })
  })
}
  
export function addUser(email, password, name) {
  return function(dispatch) {
    const customersRef = firebase.database().ref('customers');
    customersRef.push({
      name: name,
      email: email,
      phone: password,
    }).then(function(response) {
      console.log(response.key)
      const customerId = response.key
      const a = firebase.database().ref(`customers/${customerId}`);
    });
  }
}
  