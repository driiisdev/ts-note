// two syntax to declare array (string)
let strArr1: string[] = ['Hello', 'world'];
let strArr2: Array<string> = ['good', 'day']

// two syntax to declare array (any)
let anyArr: any[] = ['hello', 10, true];


// == tuple
// tuple:- is a special array that specify the data type any array can contain
let myTuple: [string, number]
myTuple = ['steve', 10]
console.log(myTuple[0]);
console.log(myTuple[1]);

// can add element as long as they are of the data type specified
myTuple.push('jobs', 100);
console.log(myTuple[4]); //error

