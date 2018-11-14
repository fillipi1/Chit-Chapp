export function firebaseLoadUsers() {
    return (dispatch) => {
        console.log('loading user')
        dispatch({ type: "LOAD_USER" });
        firebase.database().ref('/customers').once('value')
        .then((snapshot) => {  
            const users = Object.keys(snapshot.val()).map(x => snapshot.val()[x]);
            console.log(users)
            dispatch({
                type: "USER_LOAD_COMPLETE",
                payload: users,
            })
        })
        .catch((error) => {
            dispatch({
                type: "LOAD_ERROR",
                payload: error.msg,
            })
        });
    }
}