const transactionsUl = document.querySelector('#transactions');
const balanceTotal = document.querySelector('#balance');
const incomeTotal = document.querySelector('#money-plus');
const expenseTotal = document.querySelector('#money-minus');
//console.log({ balanceTotal, incomeTotal, expenseTotal });
const form = document.querySelector('#form');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');
//console.log({inputTransactionName, inputTransactionAmount});


const dummyTransactions = [
    {id : 1, name : 'Bolo de Brigadeiro', amount : -20 }, 
    {id : 2, name : 'Salário', amount : 300 }, 
    {id : 3, name : 'Torta de Frango', amount : -10 }, 
    {id : 4, name : 'Violão', amount : 150 } 
];

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount);

    const li = document.createElement('li');
    li.classList.add(cssClass);

    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUl.prepend(li);
}

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions.map(valor => valor.amount)
    const total = transactionAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2);
    const income = transactionAmounts
        .filter(item => item > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2);
    const expense = Math.abs(transactionAmounts
        .filter(item => item < 0)
        .reduce((accumulator, value) => accumulator + value, 0))
        .toFixed(2);
    balanceTotal.innerHTML = `R$ ${total}`;
    incomeTotal.innerHTML = `R$ ${income}`;
    expenseTotal.innerHTML = `R$ ${expense}`;
}

const init = () => {
    transactionsUl.innerHTML = ''
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}

init();

const generateId = () => Math.round(Math.random() * 100);

  


form.addEventListener('submit', e => {
    e.preventDefault()

    const transactionName = inputTransactionName.value.trim();
    const transactionAmount = inputTransactionAmount.value.trim();
  
    if(transactionName === '' || transactionAmount === ''){
        alert('Preencha todos os campos');
        return;
    }

    const transaction = {id: generateId(), name: transactionName, amount: Number(transactionAmount)};

    dummyTransactions.push(transaction);
    init();

    transactionName = '0';
    transactionAmount = '0';
    }
)