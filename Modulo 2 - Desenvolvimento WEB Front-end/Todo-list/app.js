const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input-form");
const clearBtn = document.querySelector(".todo-clear-btn");
const itemsList = document.getElementById("items-list");
const statusFilter = document.getElementById("filter");
const orderFilter = document.getElementById("order");
const totalCount = document.querySelector(".total-count");
const purchasedCount = document.querySelector(".purchased-count");
const pendingCount = document.querySelector(".pending-count");

let items = [];
let currentId = 0;

window.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("purchaseList");
  if (data) {
    items = JSON.parse(data);
    currentId = items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
    renderList();
  }
});

statusFilter.addEventListener("change", renderList);
orderFilter.addEventListener("change", renderList);

function saveData() {
  localStorage.setItem("purchaseList", JSON.stringify(items));
}

function renderList() {
  itemsList.innerHTML = "";

  let rendering = [...items];

  const status = statusFilter.value;
  if (status === "pending") rendering = rendering.filter((i) => !i.purchased);
  else if (status === "purchased")
    rendering = rendering.filter((i) => i.purchased);

  const order = orderFilter.value;
  if (order === "alphabetical") {
    rendering.sort((a, b) => a.text.localeCompare(b.text));
  } else if (order === "status") {
    rendering.sort((a, b) => a.purchased - b.purchased);
  }

  totalCount.textContent = `Items: ${items.length}`;
  purchasedCount.textContent = `Comprados: ${
    items.filter((i) => i.purchased).length
  }`;
  pendingCount.textContent = `Pendentes: ${
    items.filter((i) => !i.purchased).length
  }`;

  rendering.forEach((item, id) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "flex-end";
    buttonsDiv.style.gap = "10px";

    const toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.classList.add("icon-btn");

    const purchaseIcon = document.createElement("i");
    purchaseIcon.classList.add("bi", "bi-check-lg");

    toggleStatusBtn.appendChild(purchaseIcon);

    toggleStatusBtn.addEventListener("click", () => {
      togglePurchased(item);
      saveData();
    });

    if (item.purchased) {
      li.style.textDecoration = "line-through";
      li.style.color = "red";
    }

    const removeItemBtn = document.createElement("button");
    removeItemBtn.classList.add("remove-icon-btn");

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("bi", "bi-trash");

    removeItemBtn.appendChild(removeIcon);
    removeItemBtn.style.marginLeft = "10px";
    removeItemBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeItem(item.id);
    });

    li.addEventListener("click", () => {
      togglePurchased(item.id);
    });

    buttonsDiv.appendChild(removeItemBtn);
    buttonsDiv.appendChild(toggleStatusBtn);
    li.appendChild(buttonsDiv);
    itemsList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = input.value.trim();
  if (newItem === "") return;
  items.push({ id: currentId++, text: newItem, purchased: false });
  saveData();
  renderList();
  input.value = "";
});

function removeItem(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    saveData();
    renderList();
  }
}

function togglePurchased(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index].purchased = !items[index].purchased;
    saveData();
    renderList();
  }
}

clearBtn.addEventListener("click", () => {
  if (confirm("Deseja realmente limpar a lista de compras?")) {
    items = [];
    saveData();
    renderList();
  }
});
