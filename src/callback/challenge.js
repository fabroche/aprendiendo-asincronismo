// importando Request
import {XMLHttpRequest} from "xmlhttprequest";
// url a consumir
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    // instancia del objeto request
    let xhttp = new XMLHttpRequest();

    // abriendo una conexion
    xhttp.open('GET', urlApi, true)

    // validando la solicitud
    xhttp.onreadystatechange = (event) => {

        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error ${xhttp.status} on: ${urlApi}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

const productsUrl = `${API}/products`

fetchData(productsUrl, (error, data) => {

    if (error) return console.error(error);

    fetchData(`${productsUrl}/${data[0].id}`, (error2, data2) => {

        if (error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {

            if (error3) return console.error(error3);

            console.log(data[0]);
            console.log(data2.title);
            console.log(data3.name);

        });
    });
});