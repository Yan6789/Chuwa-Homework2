const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//Given the array, implement a function for generating a new
//array which doubles the quantity and price in each object.
let doubleItems = itemsObject.map((value) => {
  let tempObj = Object.assign({}, value);
  tempObj.quantity *= 2;
  tempObj.price *= 2;
  return tempObj;
});
//Given the array, implement a function for generating a ''
//new array which contains item quantity > 2 and price > 300 only.

let filterItems = itemsObject.filter(
  (value) => value.quantity > 2 && value.price > 300
);
console.log(filterItems);

//Given the array, implement a function to calculate the total value of the items.

let totalItems = itemsObject.reduce((total, curItem) => {
  total = curItem.price * curItem.quantity + total;
  return total;
}, 0);
console.log(totalItems);

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
//Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

let resultStr = string
  .split(/[ -]+/)
  .filter((str) => {
    return str;
  })
  .join(" ")
  .toLowerCase();
console.log(resultStr);
