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

putData(`${API}/products/${productId}`, newData)
    .then(res => res.json())
    .then(updatedProduct => console.log(updatedProduct))
    .catch(error => console.log(error))
