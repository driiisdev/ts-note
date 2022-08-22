export function printToFile(text: string, callback: ()=> void):void {
    console.log(text);
    callback();
}

// export function arrayMutate(numbers: number[], mutate: (num: number)=> number): number[]{
//     return numbers.map(mutate)
// } 
// console.log(arrayMutate([1, 2, 3], (num) => num * 10));

// == NB:  same as the code above

// export function arrayMutate(numbers: number[]): number[]{
//     return numbers.map((num) => num * 10)
// }
// console.log(arrayMutate([1, 2, 3]));

// == NB:  same as the code above

// type mutationFunction = (num: number) => number;

// export function arrayMutate(numbers: number[], mutate:mutationFunction): number[]{
//     return numbers.map(mutate)
// }
// console.log(arrayMutate([1, 2, 3], (num) => num * 10));


// export function createAdder(num: number): (val:number) => number{
//     return(val: number) => num + val
// }
// const addOne = createAdder(1)
// const addfive = addOne(5)
// console.log(addfive)

// == NB: same as code above
type addFunc = (n: number) => number

export function createAdder(num: number): addFunc{
    return(val: number) => num + val
}
const addOne = createAdder(1)
const addfive = addOne(5)
console.log(addfive)