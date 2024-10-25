//global variables
const toDos = ["Study DOM", "Study JavaScript", "Workout"];
const form = document.getElementById("add-todo");

//to render input values
function renderTodos() {
  const container = document.querySelector(".container"); //to target the div class in HTML file
  const ul = document.createElement("ul");
  ul.classList.add("todos");
  container.appendChild(ul); //to include uordered list into the container

  toDos.forEach((task) => {
    //to loop through the array
    const li = document.createElement("li");
    li.classList.add("toDo");
    li.textContent = task ; // Set the text content of each list item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e)=>{
      
    })
    li.appendChild(deleteBtn);
    ul.appendChild(li); // Append each list item to the unordered list
  });
}

//to render input values after loading
window.addEventListener("load", () => {
  renderTodos();
});

//to add new values to the list
function addTodo(value) {
  const ul = document.querySelector(".todos");
  const li = document.createElement("li");
  toDos.push(value);
  console.log(toDos); //to test the items in the main Array

  li.classList.add("toDo");
  li.textContent = value;
  ul.appendChild(li);
}

//to remove an item from the list
function removeToDo() {
  toDos.filter((todo) => {
    console.log(todo);
  });
}

//to capture the new value
form.addEventListener("submit", (Element) => {
  const value = document.querySelector(".toDo-input").value;
  addTodo(value);
  Element.preventDefault();
});
