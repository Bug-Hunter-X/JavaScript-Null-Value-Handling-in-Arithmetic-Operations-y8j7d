function foo(a, b) {
  // Explicitly check for null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values
  }

  // Ensure both values are numbers before adding
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Indicate invalid input type
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(0,5)); //Output: 5
console.log(foo("5",5)); //Output: NaN