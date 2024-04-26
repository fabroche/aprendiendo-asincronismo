function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

function* iterable(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterable(['oscar', 'fabroche', 'tito', 'betty', 'aby'])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())