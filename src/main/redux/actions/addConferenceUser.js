export function addConferenceUser(user){
    return {
      type: 'CONFERENCE_USER',
      payload: user
    };
  }

  export function removeConferenceUser(user){
    console.log(user.user.name)
      return {
          type: 'REMOVE_CONFERENCE_USER',
          payload: user
      }
  }