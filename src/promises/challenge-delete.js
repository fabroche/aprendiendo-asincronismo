import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi) {
    return fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origins',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

fetch(`${API}/products`)
    .then(res => res.json())
    .then(products => deleteData(`${API}/products/${products[0].id}`))
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))