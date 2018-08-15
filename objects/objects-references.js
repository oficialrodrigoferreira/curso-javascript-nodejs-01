let myAccount = {
    name: 'Rodrigo Ferreira',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    // console.log(account)
}

let addIncome = function (account, amount) {
    account.income += amount
    // console.log(account)
}

let resetAccount = function (account) {
    account.name = 'Rodrigo Ferreira'
    account.expenses = 0
    account.income = 0
    // console.log(account)
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has US$${balance}. US$${account.income} in income and US$${account.expenses} in expenses`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))