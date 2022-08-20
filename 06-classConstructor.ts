// class Person{
//     public fname: string;
//     public lname: string;
//     constructor(fname: string, lname: string){
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// same as this

class Person{
    constructor(public fname: string, public lname: string){
        this.fname = fname;
        this.lname = lname;
    }
}