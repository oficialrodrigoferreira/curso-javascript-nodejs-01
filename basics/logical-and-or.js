let temp = 150

// Logical And operator

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
}

if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
}

// Chalenge Area
let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan option!')
} else {
    console.log('Offer up anything on the menu')
}