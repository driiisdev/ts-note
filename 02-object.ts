const myPerson : {
    first: string,
    last: string
}={
    first: "idris",
    last: "yakub"
}

// or 
interface person {
    first: string,
    last: string
} 

const myOwnPerson: person ={
    first: "idris",
    last: "yakub,"
}

console.log(myOwnPerson.first);
