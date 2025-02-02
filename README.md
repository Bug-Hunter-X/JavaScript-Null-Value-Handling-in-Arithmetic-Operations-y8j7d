# JavaScript Null Value Handling Bug

This repository demonstrates a subtle bug in JavaScript related to handling null values in arithmetic operations. The `foo` function aims to add two numbers but returns 0 if either input is null.

## Bug Description

While the function correctly handles null inputs by returning 0, it might behave unexpectedly if used with other falsy values like 0 or "".  This lack of robust handling of falsy values might lead to errors in larger applications.

## Bug Solution

The solution provides a more robust approach that checks for null or undefined values explicitly, ensuring that only numeric values are used in the addition.  This makes the function less prone to unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected version.
4. Run the JavaScript files in a browser's console or a Node.js environment.