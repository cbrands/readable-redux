import { getCategories, getPosts, getComments } from './backendAPI';
import {loadCategories, loadPosts, loadComments} from "../actions/index";

export const requestCategories = () => dispatch => (
    getCategories()
        .then(categories => dispatch(loadCategories(categories)))
)

// export const requestPosts = () => dispatch => (
//     getPosts()
//         .then(posts => dispatch(loadPosts(posts)))
// )

export const requestPosts = () => dispatch => (
    getPosts()
        .then(posts => {
            Promise.all([
                dispatch(loadPosts(posts)),
                dispatch(loadComments())
            ])
        })
)

export const requestComments = (posts) => dispatch => (
    posts.map((post) => getComments(post.id)
        .then(comments => dispatch(loadComments(comments)))
    )
);