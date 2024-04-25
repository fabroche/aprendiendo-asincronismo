import fetch from "node-fetch";

// url a consumir
const API = 'https://api.escuelajs.co/api/v1';

// importando fetch
function fetchData2(urlApi) {
    return fetch(urlApi)
}

// fetchData2(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(() => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error))

fetchData2(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData2(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product)
        return fetchData2(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category)
        console.log(category.name)
    })
    .catch(error => console.log(error))