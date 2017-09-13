import { getCategories } from '../utils/backendAPI';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadCategories({ categories }) {
    console.log('actioncategories', categories);
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}

export const requestCategories = () => dispatch => (
    getCategories()
        .then(categories => dispatch(loadCategories(categories)))
)


