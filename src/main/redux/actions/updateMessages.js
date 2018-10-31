export function updateMessages(message){
    return {
      type: 'NEW_MESSAGE',
      payload: message
    };
  }