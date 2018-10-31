export function updateUsers(user){
    return {
      type: 'NEW_USER',
      payload: user
    };
  }

  export function loginUser(){
    console.log('called')
      firebase.auth().createUserWithEmailAndPassword('fillipi@impekale.com', 'testpassword').then((user) => {
        const MY_ID = user.uid;
        const MY_EMAIL = user.email;
         var userRef = firebase.database().ref('user');
        userRef.set({
          id: MY_ID,
          name: 'Fillipi',
          email: MY_EMAIL,
        }).then(() => {
          alert('Horray User has been created');
        })
        })
  }
  