import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, toUpdateData) {
    return fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(toUpdateData)
    })
}

const productId = 103
const newData = {
    "title": "PUT Data"
}

fetch(`${API}/products`)
    .then(res => res.json())
    .then(products => putData(`${API}/products/${products[0].id}`, newData))
    .then(res => res.json())
    .then(updatedProduct => console.log(updatedProduct))
    .catch(error => console.log(error))
