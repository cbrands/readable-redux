const BACKEND_URL = 'http://localhost:5001'

let token = localStorage.token

if (!token) {
    var characterSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var tokenLength = 24;
    var randomArray = [];
    for (var i = 0; i < tokenLength; i++) {
        randomArray.push(Math.floor(Math.random() * tokenLength));
    }
    token = localStorage.token = randomArray.join('');
}

const headers = {
    'Authorization': token,
    'Accept': 'application/json'
}

export const getCategories = () => {
    return fetch(`${BACKEND_URL}/categories`, { headers })
        .then(response => response.json())
        .then(data => data.categories)
}
