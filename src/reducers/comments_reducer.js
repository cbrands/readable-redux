import { LOAD_COMMENTS } from '../actions';

function comments(state = {}, action) {
    switch(action.type) {
        case LOAD_COMMENTS:
            console.log('loading comments');
            console.log('actioncomments', action.comments);
            return { ...state, comments: action.comments }
        default:
            return state;
    }
}

export default comments;