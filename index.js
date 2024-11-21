
let theList = [1,2,3];
let newList = 4;
let updatedList = addItemToArray(theList, newList);//invoking 1st function

console.log("This is for testing: " + updatedList);
renderList(updatedList); //invoking 2nd function


//1.add items to the list
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

//2.render the List
function renderList(arrai) {
  arrai.forEach((items) => {
    console.log("rendering Item: " + items);
  });
}

//3. Deleting items from the list
function removeItemFromArray(array, index){
if (index >=0 && index < array.length){
  array.splice(index, 1)
}
else {
  console.log("invalid index: " + index)
}
}