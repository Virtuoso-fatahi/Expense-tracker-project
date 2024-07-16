"use strict";
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const expenses = [];
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    const categorySelect = document.getElementById('expense-category');
    const newExpense = {
        name: nameInput.value,
        amount: parseFloat(amountInput.value),
        category: categorySelect.value
    };
    expenses.push(newExpense);
    updateExpenseList();
    expenseForm.reset();
});
function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
                  ${expense.name} - #${expense.amount.toFixed(2)} <span class="badge bg-primary">${expense.category}</span>
                  <button class="btn btn-danger btn-sm" onclick="removeExpense(${index})">Remove</button>
              `;
        expenseList.appendChild(li);
    });
}
function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
}
