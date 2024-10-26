//global variables
const toDos = ["Study DOM", "Study JavaScript", "Workout"];
const form = document.getElementById("add-todo");

//to render input values
function renderTodos(array) {
  const container = document.querySelector(".container"); //to target the div class in HTML file
  const ul = document.createElement("ul");
  ul.classList.add("todos");
  container.appendChild(ul); //to include uordered list into the container

  //to loop through the array
  array.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span"); //1. Declaring the [span] tag

    li.classList.add("toDo");

    span.textContent = task; //  2.targeting all the task to be inside the span tag.
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => {
      const selectedToDo = e.target.previousSibling.textContent;
      removeToDo(selectedToDo);
    });
    li.appendChild(span); //3. Append span into list
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
function removeToDo(selectedToDo) {
  console.log("The selected Task: " + selectedToDo);
  const filteredToDo = toDos.filter((todo) => {
    return todo !== selectedToDo;
  });
  console.log("The filteredToDo : " + filteredToDo);
  console.log("The toDos : " + toDos);

  renderTodos(filteredToDo); //to render the list after removing
}

//to capture the new value
form.addEventListener("submit", (Element) => {
  const value = document.querySelector(".toDo-input").value;
  addTodo(value);
  Element.preventDefault();
});


window.addEventListener("load", (e) => {
  renderTodos(toDos);
});
