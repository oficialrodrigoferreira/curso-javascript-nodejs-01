const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Rodrigo',
    age: 39
}, {
    name: 'Debbra',
    age: 41
}, {
    name: 'Bel',
    age: 16
}]

// const under20 = people.filter(function (person) {
//     return person.age < 20
// })

const under20 = people.filter((person) => person.age < 20)
console.log(under20)

const age39 = people.find((person) => person.age === 39)
console.log(age39.name)