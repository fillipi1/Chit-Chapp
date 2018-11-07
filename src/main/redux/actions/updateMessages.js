export function updateMessages(message){
  const outText = firebase.database().ref('messages');
  outText.push(message.id);
    return {
      type: 'NEW_MESSAGE',
      payload: message
    };
  }