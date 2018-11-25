export function updateMessages(message, chatId){
    return {
      type: 'NEW_MESSAGE',
      payload: message
    };
  }