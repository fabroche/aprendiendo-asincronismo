import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const res = await fetch(urlApi)
    return await res.json();
}

const anotherFunction = async (urlApi) => {

    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`)
        const category = await fetchData(`${API}/categories/${product.category.id}`)

        // console.log(products)
        console.log(product)
        console.log(product.title)
        console.log(category.name)

    } catch (error) {

        console.error(error)

    }
}

anotherFunction(API)