const BACKEND_URL = 'http://localhost:5001'

let token = localStorage.token

if (!token) {
    var characterSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var tokenLength = 24;
    var randomArray = [];
    for (var i = 0; i < tokenLength; i++) {
        randomArray.push(characterSet.charAt(Math.floor(Math.random() * characterSet.length)));
    }
    token = localStorage.token = randomArray.join('');
}

const headers = {
    'Authorization': token,
    'Accept': 'application/json'
}

export const getCategories = () => {
    console.log('meh', fetch(`${BACKEND_URL}/categories`, { headers })
        .then(response => response.json()));
    return fetch(`${BACKEND_URL}/categories`, { headers })
        .then(response => response.json())
}

export const getPosts = () => {
    console.log('meh', fetch(`${BACKEND_URL}/posts`, { headers })
        .then(response => response.json()));
    return fetch(`${BACKEND_URL}/posts`, { headers })
        .then(response => response.json())
}


export const getComments = (id) =>
    fetch(`${BACKEND_URL}/posts/${id}/comments`, { headers })
        .then(response => response.json())