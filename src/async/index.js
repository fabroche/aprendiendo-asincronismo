const fnAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Async!!'), 2000);
    })
}

const anotherFunc = async () => {
    const result = await fnAsync();
    console.log(result)
    console.log('Hello')
}

console.log('Before')
anotherFunc().catch(error => error)
console.log('After')