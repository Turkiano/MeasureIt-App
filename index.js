const toDos = ["Study DOM", "Study JavaScript", "Workout"];
const container = document.querySelector(".container"); //to target the div class in HTML file
const ul = document.createElement("ul");
container.appendChild(ul); //to include uordered list into the container

toDos.forEach((Element) => {
  const li = document.createElement("li");
  li.classList.add("toDo");
  li.textContent = Element; // Set the text content of each list item
  ul.appendChild(li); // Append each list item to the unordered list
});

const addButton = document.querySelector("#submit-btn");
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const newToDoInput = document.querySelector(".toDo-input");
  const newToDoValue = newToDoInput.value.trim(); //// Get the input value and trim any excess spaces
  console.log("button input: " + newToDoValue);

  const li = document.createElement("li");
  li.classList.add("toDo");
  li.textContent = newToDoValue;
  ul.appendChild(li);
});
