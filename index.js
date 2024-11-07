//global variables
let toDos = ["Study DOM", "Study JavaScript", "Workout"];

const form = document.getElementById("add-todo");
const ul = document.createElement("ul");

//to render input values
function renderTodos(array) {
  const container = document.querySelector(".taskContainer"); //to target the div class in HTML file
  ul.classList.add("todos");
  container.appendChild(ul); //to include uordered list into the container

  //to loop through the array
  array.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span"); //1. Declaring the [span] tag
    // const editBtn = document.createElement("edButton");

    li.classList.add("toDo");
    span.textContent = task; //  2.targeting all the task to be inside the span tag.

    const deleteBtn = createDeleteButton();
    const editBtn = createEditButton();
    const checkbox = createChickbox();

    li.appendChild(checkbox);
    li.appendChild(span); //3. Append span into list
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li); // Append each list item to the unordered list
  });
}

//to render taks, every time we load
window.addEventListener("load", (e) => {
  renderTodos(toDos);
});

//to add new values to the list
function addTodo(value) {
  const ul = document.querySelector(".todos");
  const li = document.createElement("li");

  toDos.push(value); //to add the new value to the main array
  li.textContent = value; //to show the new tasks in the <li> tag
  li.classList.add("toDo");

  const deleteBtn = createDeleteButton();
  const editBtn = createEditButton();
  const checkbox = createChickbox();
  li.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

//to remove an item from the list
function removeToDo(selectedToDo) {
  // console.log("The selected Task: " + selectedToDo);
  const filteredToDo = toDos.filter((toDo) => {
    return toDo !== selectedToDo;
  });

  ul.innerHTML = ""; //to remove the deleted task
  toDos = filteredToDo; //to updated the tasks

  renderTodos(filteredToDo); //to render the list after removing
}

//to capture the new value, when submitting
form.addEventListener("submit", (Element) => {
  const value = document.querySelector(".toDo-input").value;
  addTodo(value);
  Element.preventDefault();
});

function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  const deleteImg = document.createElement("img");
  deleteBtn.classList.add("deleteBtn");

  deleteImg.src = "img/delete_icon.png";
  deleteImg.alt = "Delete";
  deleteImg.width = 20;
  deleteImg.height = 20;
  deleteBtn.appendChild(deleteImg);

  // Attach event listener to the delete button
  deleteBtn.addEventListener("click", (e) => {
    const selectedToDo = e.target
      .closest("li")
      .querySelector("span").textContent;
    removeToDo(selectedToDo);
  });

  return deleteBtn;
}

function createEditButton() {
  const editBtn = document.createElement("button");
  const editImg = document.createElement("img");
  editBtn.classList.add("editBtn");
  editImg.src = "img/edit_icon.png";
  editImg.alt = "Delete";
  editImg.width = 20;
  editImg.height = 20;
  editBtn.appendChild(editImg);

  // Attach event listener to the edit button
  editBtn.addEventListener("click", (e) => {
    const selectedToDo = e.target
      .closest("li")
      .querySelector("span").textContent;
    removeToDo(selectedToDo);
  });

  return editBtn;
}

function createChickbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  checkbox.addEventListener("change", (e) => {
    if (checkbox.checked) {
      e.target.closet("li").classList.add("completed");
    } else {
      e.target.closet("li").classList.remove("completed");
    }
  });

  return checkbox;
}
