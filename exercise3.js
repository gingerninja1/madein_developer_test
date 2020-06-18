// Exercise #3
const products = [
  {name: "Stainless 10\"", weight: 1.5, price: 65, size: 10, id: 12},
  {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12, id: 13},
  {name: "Carbon Steel 10\"", weight: 1.5, price: 75, size: 10, id: 23},
  {name: "Carbon Steel 12\"", weight: 1.95, price: 75, size: 12, id: 24},
  {name: "Nonstick 10\"", weight: 2.0, price: 70, size: 10, id: 3},
  {name: "Nonstick 12\"", weight: 2.0, price: 70, size: 12, id: 4}
]

// Create two new arrays
var greaterThan75 = []
var greaterThan1pt8 = []

products.forEach(product => {
  if (product.price > 75) {
    // Push results into greaterThan75 array
    greaterThan75.push(product);
  }
  if (product.weight > 1.8) {
    // Push results into greaterThan1pt8 array
    greaterThan1pt8.push(product);
  }
})
// Output results
console.log('Greater than 75', greaterThan75);
console.log('Greater than 1.8', greaterThan1pt8);

// Create constant that accepts an array and key for conversion
const arrayIntoObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};
// Output new object with the id as a key for each array element
console.log(arrayIntoObject(products,'id'));
