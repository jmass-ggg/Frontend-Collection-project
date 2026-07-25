const balanceCurrent=document.getElementById("balance");
const incomeAmount=document.getElementById("income");
const expenseAmount=document.getElementById("expense");

const transactionsList=document.getElementById("transaction-list");
const transactionForm=document.getElementById("transaction-form");
const descriptionEL = document.getElementById("description");
const amountEl = document.getElementById("amount");


let transactions=JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(e){
    e.preventDefault();
    const description=descriptionEL.value.trim();
    const amount=parseFloat(amountEl.value);

    transactions.push(
        {
            id:Date.now(),
            description,
            amount
        }
    )
    localStorage.setItem("transactions",JSON.stringify(transactions));

    updateSummary();
    updateTransactionForm();

    transactionForm.reset();
}

function updateTransactionForm(){
    transactionsList.innerHTML = "";

    const reversedTransactions = [...transactions].reverse();

    reversedTransactions.forEach((transaction) => {
        const transactionEl = createTransactionElement(transaction);
        transactionsList.appendChild(transactionEl);
    });
}

function createTransctionElement(transaction){
    const div = document.createElement("div");

    div.classList.add("transaction");

    div.classList.add(
        transaction.amount >= 0 ? "income" : "expense"
    );

    div.innerHTML = `
        <span>${transaction.description}</span>

        <span>
            $${transaction.amount.toFixed(2)}
            <button
                class="delete-btn"
                onclick="removeTransaction(${transaction.id})">
                ✕
            </button>
        </span>
    `;

    return div;
}