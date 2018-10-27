export function receivedMessage(message){
    return {
      type: 'RECEIVED_MESSAGES',
      payload: message
    };
  }