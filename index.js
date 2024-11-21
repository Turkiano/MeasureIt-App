let theList = [1, 2, 3];
let newList = 4;
let updatedList = addItemToArray(theList, newList); //invoking 1st function

console.log("01.testing addItem: " + updatedList);
renderList(updatedList); //invoking 2nd function

removeItemFromArray(updatedList, 10);
console.log("03.testing removed itemd: " + updatedList);


//1.add items to the list
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

//2.render the List
function renderList(arrai) {
  arrai.forEach((items) => {
    console.log("02.rendering Item: " + items);
  });
}

//3. Deleting items from the list
function removeItemFromArray(array, index) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  } else {
    console.log("invalid index: " + index);
  }
}
