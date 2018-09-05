// A redux store stores all the application state (userlist,messages,notes)
// The point of this file is to combine the states together from reducers 

// actions - updates the states through reducers
// must return an object with a type and payload 
// when an action gets called the reducers start listening

// Like Button...onClick={updateLike}
function updateLikes(){
    return {
        type: 'UPDATE_LIKES'
    };
};

function submitComment(comment){
    return {
        type: 'SUBMIT_COMMENT',
        payload: comment
    };
};

// reducers - combines to form the redux state (ex: )
const initialState = {
    likes: 0,
    comments: [],
    live: false,
    extra_stuff: {},

}

function postReducer(state = initialState, action){
    if (action.type ==='UPDATE_LIKES'){
        return { ...state, likes: state.likes + 1, live: true }
    } else if (action.type === 'SUBMIT_COMMENT'){
        // const x = state.comments;
        // x.push(action.payload);
        // return { ...state, comments: x }
        return {
            ...state,
            comments: [ ...state.comments, action.payload ]
        }
    }

    return state;
}

 const profileState = {
     count: 0,
 };
function profileReducer(state = profileState, action){
    if (action.type === 'SUBMIT_COMMENT'){
        return {...state, count: state.count + 1 }
    }
    return state
}



// store - stores all the application state taken from reducers
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    post: postReducer,
    profile: profileReducer
});

export default createStore(rootReducer);

// this.state.post.meta[0].date