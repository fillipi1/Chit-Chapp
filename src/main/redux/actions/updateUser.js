export function updateUsers(user){
  return {
    type: 'NEW_USER',
    payload: user
  };
}

export function loginUser(){
  console.log('called')
  firebase.auth().createUserWithEmailAndPassword('Fillip111@gmail.com', 'testpassword').then((response) => {
    const MY_ID = response.user.uid;
    const MY_EMAIL = response.user.email;
    var userRef = firebase.database().ref('agent').set({[response.user.uid]: {
      id: MY_ID,
      name: 'Fillipi',
      email: MY_EMAIL,
      phone: "+15103437234"
    }})
    // userRef.push({
    //   id: MY_ID,
    //   name: 'Fillipi',
    //   email: MY_EMAIL,
    //   phone: "+15103437234"
    // })
    .then(() => {
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
      const chatRef = firebase.database().ref('chat');
      chatRef.push({
        members: {customer: customerId, agent: "dBMGQE4T23a6cbTGLIS4gD2ljr13"}
      }).then(function(response) {
       const messageId = response.key
       const messageRef = firebase.database().ref('messages(trial)');
        messageRef.push({
          Id: messageId
        })
        console.log('char id' + response.key)
      })
      //create new chat then save chatUID in both agent and customer
    });
  }
}
  
 //const a = firebase.database().ref(`agents/${customerId}/`);
 //next steps: 1) make sure agents key is = agentId 2) 
//  firebase.database().ref("pathName").set({[variable] : 'MoreStuff'});
// Option 2
// var id="30";
// var updatedObj = {};
// updatedObj[id] = true;
// ref.child("someChild").update(updatedObj);