// interface allows one to define the shape of an object by assign a type to an object property

interface Person{
    fname: string;
    lname: string;
    // age: number;
    age?: number; // adding '?' to the age makes it optional
}

let employee1: Person = {
    fname: 'idris',
    lname: 'yakub',
    age: 30
}