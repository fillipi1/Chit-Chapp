export function updateMessages(message, chatId){
  //const outText = firebase.database().ref(`messages/${chatId}`);
  //outText.push(message.id);
    return {
      type: 'NEW_MESSAGE',
      payload: message
    };
  }