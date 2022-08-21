//  open source
//  microsoft
//  typed superset of js
//  types(optional)
//  identify mistakes during development
//  compiles to plain javascript
//  Ts = es5 + es6 + es7 + features 
//  safer code
 
//eg:

let userName: string = "idris";
let hasLoggedIn: boolean = true;

// hasLoggedIn += " yakub";

console.log(hasLoggedIn);

//in js, the above will output: 'true yakub:
//in ts, the above will give an error; as type 'string' is not assignable to boolean


let myNumber: number = 10;
let myRegex: RegExp = /foo/

