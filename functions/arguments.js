// multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add (10, 1, 5)
console.log (result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// chalenge area

let getTip = function (total, tipPercent = .2) {
    let tip = total * tipPercent
    let percent = tipPercent * 100
    return `${percent}% de US$${total} = US$${tip}`
}

let tip = getTip(60)
console.log(tip)
