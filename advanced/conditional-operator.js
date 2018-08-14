// const myAge = 39
// const message = myAge >= 18 ? 'You can vote!' : 'You can not vote!'
// console.log(message)

const myAge = 39
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Rodrigo', 'Daniel', 'Debbra']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people in your team')
// team.length <= 4 ? console.log() : console.log()