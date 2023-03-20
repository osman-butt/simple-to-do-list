"use strict";

window.addEventListener("load", initApp);
const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

// function addToDo() {
//   const listItem = document.createElement("li");
//   const listText = document.createElement("span");
//   const listBtn = document.createElement("button");
//   listBtn.textContent = "Delete";
//   listText.textContent = newToDo.value;
//   console.log(listItem);
//   console.log(listText);
//   console.log(listBtn);
//   listItem.appendChild(listText);
//   listItem.appendChild(listBtn);
//   list.appendChild(listItem);
//   newToDo.value = "";
//   newToDo.focus();
//   listBtn.addEventListener("click", removeToDo);
// }

function addToDo() {
  if (newToDo.value) {
    newToDo.classList.remove("notValidated");
    const myHTML = /*html*/ `
    <li>
        <span>${newToDo.value}</span>
        <button class="update">Update</button>
        <button class="delete">Delete</button>
    </li>
    `;
    list.insertAdjacentHTML("beforeend", myHTML);
    list
      .querySelector("li:last-child button.delete")
      .addEventListener("click", removeToDo);
    list
      .querySelector("li:last-child button.update")
      .addEventListener("click", updateToDo);
    newToDo.value = "";
    newToDo.focus();
  } else {
    newToDo.classList.add("notValidated");
  }
}

function removeToDo() {
  console.log(this.parentNode);
  this.parentNode.remove();
  newToDo.classList.remove("notValidated");
}

function updateToDo() {
  newToDo.classList.remove("notValidated");
  // remove event listener
  this.removeEventListener("click", updateToDo);
  this.textContent = "Save";
  this.addEventListener("click", saveChanges);
  const toDoSpan = this.parentNode.querySelector("span");
  toDoSpan.setAttribute("contenteditable", true);
  toDoSpan.focus();
}

function saveChanges() {
  console.log("savechanges");
  console.log(this);
  this.removeEventListener("click", saveChanges);
  this.textContent = "Update";
  this.addEventListener("click", updateToDo);
  const toDoSpan = this.parentNode.querySelector("span");
  toDoSpan.setAttribute("contenteditable", false);
}
