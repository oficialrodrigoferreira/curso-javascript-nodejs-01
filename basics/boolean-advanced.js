let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked!')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!')
}

// Chalenge Area
let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is very hot outside!')
} else {
    console.log ('It is pretty nice outside!')
}