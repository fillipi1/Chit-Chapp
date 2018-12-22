export function addConferenceUser(user){
    return {
      type: 'CONFERENCE_USER',
      payload: user
    };
  }