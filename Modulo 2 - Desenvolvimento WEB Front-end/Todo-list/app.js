const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input-form");
const clearBtn = document.querySelector(".todo-clear-btn");
const itemsList = document.getElementById("items-list");

let items = [];

window.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("purshaseList");

  if (data) {
    items = JSON.parse(data);
    renderList();
  }
});

function saveData() {
  localStorage.setItem("purshaseList", JSON.stringify(items));
}

function renderList() {
  itemsList.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const removeItemBtn = document.createElement("button");
    removeItemBtn.textContent = "X";

    removeItemBtn.addEventListener("click", () => {
      removeItem(index);
    });

    li.appendChild(removeItemBtn);
    itemsList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = input.value.trim();

  if (newItem == "") return;
  items.push(newItem);

  saveData();
  renderList();

  input.value = "";
});

function removeItem(index) {
  items.splice(index, 1);
  saveData();
  renderList();
}

clearBtn.addEventListener("click", () => {
  if (confirm("deseja realmente limpar a lista de compras")) {
    items = [];
    saveData();
    renderList();
  }
});
