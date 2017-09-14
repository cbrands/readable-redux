import { LOAD_POSTS } from '../actions';

function posts(state = {}, action) {
    switch(action.type) {
        case LOAD_POSTS:
            console.log('loading posts');
            console.log('actionposts', action.posts);
            return { ...state, posts: action.posts }
        default:
            return state;
    }
}

export default posts;