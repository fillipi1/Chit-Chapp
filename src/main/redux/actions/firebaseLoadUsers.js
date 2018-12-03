export function firebaseLoadUsers() {
    return (dispatch) => {
        dispatch({ type: "LOAD_USER" });
        firebase.database().ref('/customers').once('value')
        .then((snapshot) => {  
            const users = Object.keys(snapshot.val()).map(x => snapshot.val()[x]);
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