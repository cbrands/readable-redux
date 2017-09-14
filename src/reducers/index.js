import { combineReducers } from 'redux';

import categories from './categories_reducer';
import posts from './posts_reducer';

const rootReducer = combineReducers({
    categories,
    posts
})

export default rootReducer;