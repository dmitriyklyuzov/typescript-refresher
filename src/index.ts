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

// literal types - limiting the values we can assign to a variable
// let quantity: number; // takes any number

// Literal (exact, specific)
let literalQuantity: 50 | 100 = 50;

// literal type
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let lengthMetric: Metric = 'cm';

// Null types
function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null);

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// we have to check if customer is not null
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);

// cleaner version using an optional property access operator, no need for explicit checking
console.log(customer?.birthday?.getFullYear());

// instead of this,
// if (customers !== null && customers !== undefined)
//     customers[0]

// use the optional element access operator
let customers: String[] = ["Customer 1"]
console.log(customers?.[0])

// sample function to log the passed message
let log: any = (message: string) => console.log(message);
log("Hello");

let noLog: any = null;
// noLog('hello!'); // this will crash because noLog is null and not a function
noLog?.('hello!') // this will work if noLog is a function
