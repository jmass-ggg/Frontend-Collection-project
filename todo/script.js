const userInput = document.getElementById("task");
const result = document.querySelector(".result");
const button = document.getElementById("submits");
const page = document.getElementById("container");

let userLists = JSON.parse(localStorage.getItem("List") || "[]");

button.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();

    const userValue = userInput.value.trim();

    if (userValue === "") {
        alert("Enter the list");
        return;
    }

    const userInputValue = {
        id: Date.now(),
        userValue: userValue
    };

    userLists.push(userInputValue);

    saveUserList();
    updateUrls();

    // Clear input after adding
    userInput.value = "";
}

function saveUserList() {
    localStorage.setItem("List", JSON.stringify(userLists));
}

function updateUrls() {
    result.innerHTML = "";

    const reverseUser = [...userLists].reverse();

    reverseUser.forEach(userInputValue => {
        const userEl = createElement(userInputValue);
        result.appendChild(userEl);
    });
}

function createElement(userInputValue) {
    const task = document.createElement("label");

    task.innerHTML = `
        <input type="checkbox">
        <span>${userInputValue.userValue}</span>
        <button onclick="removeUserInput(${userInputValue.id})">x</button>
    `;

    return task;
}

function removeUserInput(id) {
    userLists = userLists.filter(
        userInputValue => userInputValue.id !== id
    );

    saveUserList();
    updateUrls();
}

updateUrls();