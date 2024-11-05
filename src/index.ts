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

// Functions
function calculateTax(income: number, taxYear = 2024): number {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(100_000, 2024)

// type defines the shape of data, like int, bool, etc
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// Objects
let employee: Employee = {
    id: 1,
    name: 'Dmitriy',
    retire: (date: Date) => {
        console.log(date);
    }
};

employee.name = 'Dmitriy';
// employee.id = 123; // invalid

// union type - you can pass either a num or a string
function kgToLbs(weight: number | string): number {
    // narrowing this union type to a more specific type
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10)
kgToLbs('10kg')

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

// intersection of types - UI Widget type is both draggable and resizable
type UIWidget = Draggable & Resizable;

// textBox of type UIWidget has to implement both methods
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
