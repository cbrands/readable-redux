import { LOAD_CATEGORIES } from '../actions';

function categories(state = {selected: 'none'}, action) {
    switch(action.type) {
        case LOAD_CATEGORIES:
            return { ...state, categories: action.categories }
        default:
            return state;
    }
}

export default categories;