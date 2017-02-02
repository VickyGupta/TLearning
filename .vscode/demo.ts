let message : string  = "Hello MindTraits";

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    //console.log("Hello, " + person.firstName + " " + person.lastName);
    console.log(user.fullName)
    return "Hello, " + person.firstName + " " + person.lastName;
    
}

let user = new Student("Sample", "M.", "User");
//greeter(user);

//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float : number = 3.14;

// string backtick/backquote (`)

let fullName: string = `Vick Gupta`;
let age: number = 26;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`


//Array
let list: Array<number> = [1, 2, 3];
let list1: Array<string> = ["1", "2", "3"];
console.log(list);


//



