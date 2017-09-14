export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export function loadCategories({ categories }) {
    console.log('actioncategories', categories);
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}

export function loadPosts({ posts }) {
    console.log('actionposts', posts);
    return {
        type: LOAD_POSTS,
        posts
    }
}

export function loadComments( comments ) {
    console.log('actioncomments', comments);
    return {
        type : LOAD_COMMENTS,
        comments
    }
}




