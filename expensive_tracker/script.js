const balanceCurrent = document.getElementById("balance");
const incomeAmount = document.getElementById("income");
const expenseAmount = document.getElementById("expense");

const transactionsList = document.getElementById("transaction-list");
const transactionForm = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");


let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


transactionForm.addEventListener("submit", addTransaction);

function addTransaction(e) {
    e.preventDefault();

    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    if (description === "" || isNaN(amount)) {
        alert("Please enter valid data.");
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount
    };

    transactions.push(transaction);

    saveTransactions();

    updateSummary();
    updateTransactionList();

    transactionForm.reset();
}

function saveTransactions(){
    localStorage.setItem("transactions",JSON.stringify(transactions))
}

function updateTransactionList(){
    transactionsList.innerHTML="";
    const reversedTransactions=[...transactions].reverse();
    reversedTransactions.forEach(transaction=>{
        const transactionEl=createTransactionElement(transaction);
        transactionsList.appendChild(transactionEl);
    })
}

function createTransactionElement(transaction){
    const li=document.createElement("li");
    li.classList.add("transaction");
    li.classList.add(transaction.amount >= 0 ? "income":"expense");
    li.innerHTML=`
    <span>${transaction.description}</span>
    <span>
    $${transaction.amount.toFixed(2)}
    <button class="delete-btn"
    onclick="removeTransaction(${transaction.id})">
    X </button>
    </span>

    `
    return li;
}

function removeTransaction(id){
    transactions=transactions.filter(transaction => transaction.id !== id);

    saveTransactions();
    updateSummary();
    updateTransactionList();
}

function updateSummary() {

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0);

    balanceCurrent.textContent = `$${total.toFixed(2)}`;
    incomeAmount.textContent = `$${income.toFixed(2)}`;
    expenseAmount.textContent = `$${Math.abs(expense).toFixed(2)}`;
}


updateSummary();
updateTransactionList();














// // Save to localStorage
// function saveTransactions() {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
// }

// // Update transaction list
// function updateTransactionList() {
//     transactionsList.innerHTML = "";

//     const reversedTransactions = [...transactions].reverse();

//     reversedTransactions.forEach(transaction => {
//         const transactionEl = createTransactionElement(transaction);
//         transactionsList.appendChild(transactionEl);
//     });
// }

// // Create transaction element
// function createTransactionElement(transaction) {

//     const li = document.createElement("li");

//     li.classList.add("transaction");
//     li.classList.add(transaction.amount >= 0 ? "income" : "expense");

//     li.innerHTML = `
//         <span>${transaction.description}</span>

//         <span>
//             $${transaction.amount.toFixed(2)}
//             <button class="delete-btn"
//                 onclick="removeTransaction(${transaction.id})">
//                 ✕
//             </button>
//         </span>
//     `;

//     return li;
// }

// // Remove transaction
// function removeTransaction(id) {

//     transactions = transactions.filter(transaction => transaction.id !== id);

//     saveTransactions();

//     updateSummary();
//     updateTransactionList();
// }

// // Update balance, income, expense
// function updateSummary() {

//     const amounts = transactions.map(transaction => transaction.amount);

//     const total = amounts.reduce((acc, item) => acc + item, 0);

//     const income = amounts
//         .filter(item => item > 0)
//         .reduce((acc, item) => acc + item, 0);

//     const expense = amounts
//         .filter(item => item < 0)
//         .reduce((acc, item) => acc + item, 0);

//     balanceCurrent.textContent = `$${total.toFixed(2)}`;
//     incomeAmount.textContent = `$${income.toFixed(2)}`;
//     expenseAmount.textContent = `$${Math.abs(expense).toFixed(2)}`;
// }

// // Initial render
// updateSummary();
// updateTransactionList();