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