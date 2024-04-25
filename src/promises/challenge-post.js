import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    return fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const newProduct = {
    "title": "459",
    "price": 459,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, newProduct)
    .then(response => response.json())
    .then(newProduct => console.log(newProduct))
    .catch(error => console.log(error))
