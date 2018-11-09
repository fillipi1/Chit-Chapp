export function updateUsers(user){
  return {
    type: 'NEW_USER',
    payload: user
  };
}

export function updateAgent(user){
  return {
    type: 'NEW_AGENT',
    payload: user
  };
}

export function loginUser(){
  console.log('called')
  firebase.auth().createUserWithEmailAndPassword('Fillip1111@yahoo.com', 'testpassword').then((response) => {
    const MY_ID = response.user.uid;
    const MY_EMAIL = response.user.email;
    var userRef = firebase.database().ref('agent').set({[response.user.uid]: {
      id: MY_ID,
      name: 'Fillipi',
      email: MY_EMAIL,
      phone: "+15103437234"
    }})
    .then((response) => {
      console.log(response)
      return {
        type: 'LOG_IN',
      payload: response
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
      messages: [{text: ''}]
    }).then(function(newCustomerRef) {
      console.log(newCustomerRef.key)
      const customerId = newCustomerRef.key
      const chatRef = firebase.database().ref('chat');
      chatRef.push({
        members: {customer: customerId, agent: "F7fdZdXzhBUva0vu4TcQ2K5y33k2"}
      }).then(function(response) {
        firebase.database().ref('messages(trial)').set({[response.key]: {
      
       }});
        console.log(newCustomerRef)
        newCustomerRef.update({chatId: response.key})
      })
    });
  }
}
