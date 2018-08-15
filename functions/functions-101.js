// Function - input (arguments), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Chalenge Area

let convertFahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * 5 / 9
    return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))