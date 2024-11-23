let theList = [1, 2, 3];
let newItem = 4;
let updatedList = addItemToArray(theList, newItem); //invoking 1st function

console.log("01.testing Add function: " + updatedList);
renderList(updatedList); //invoking 2nd function

removeItemFromArray(updatedList, 2); //invoking 3rd function
console.log("03.testing removed function: " + updatedList);

editItemInArray(updatedList, 5); //invoking 4th function
console.log("04.testing Edit function: " + updatedList);

countItemsInArray(updatedList);
console.log("05.testing Counter function: " + updatedList);

//1.add function
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

//2.render function
function renderList(arrai) {
  arrai.forEach((items) => {
    console.log("02.rendering Item: " + items);
  });
}

//3. Delete function
function removeItemFromArray(array, index) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  } else {
    console.log("invalid index: " + index);
  }
}

//04. Editing function
function editItemInArray(array, index) {
  array.push(index);
}

//05. Counter function
function countItemsInArray(array) {
  return array.length;
}
