let name = '  Rodrigo Ferreira  '

// Lenght property
console.log(name.length)

// Convert to Uppper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123cvzcvz098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Chalenge Area
let isValidPassword = function (senha) {
    return (senha.length > 8 && !senha.includes('password'))
}

console.log(isValidPassword('dklfhdsfkeue'))
console.log(isValidPassword('123'))
console.log(isValidPassword('dklfhdpasswordsfkeue'))