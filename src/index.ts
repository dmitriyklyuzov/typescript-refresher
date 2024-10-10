let sales: number = 123_456_789;    // explicit 'number' type
let course = 'TypeScript';          // inferred type
let is_published: boolean = true;   // boolean type

// initialized as 'any' type
let level;

// tuple
let user: [number, string] = [1, 'Dmitriy'];

// enum - represents a list of related constants
// enum Size { Small = 1, Medium, Large }; // PascalCase
const enum Size { Small = 1, Medium, Large }; // adding 'const' for a more optimized code
let mySize: Size = Size.Medium;