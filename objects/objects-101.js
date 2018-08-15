let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Chalenge Area
let person = {
    name: 'Rodrigo',
    age: 39,
    location: 'São João da Boa Vista'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)