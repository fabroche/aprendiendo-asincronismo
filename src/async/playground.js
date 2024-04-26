import fetch from "node-fetch";

async function runCode() {

    const url = 'https://domain-api-com';

    try {

        return (await fetch(url)).json()

    } catch (error) {
 
        throw new Error('API Not Found')

    }

}

await runCode()
