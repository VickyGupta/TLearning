class Cgeneric {
    
    public genericType<T>(arg: T): T {
        return arg;
    }
}

let generic = new Cgeneric();
//let getGenericType = generic.genericType("vicky");
let demoArray : string[] = ["a","b"];
let getGenericType = generic.genericType([1,"2",2.5]);

//console.log(getGenericType[2]);



class Employee {
    private size : number;
    constructor(_size : number){
        this.size = _size;
    }

    public addEmployee<T>(arg: T): Array<any> {
        console.log(typeof(arg));
        let employeelist : Array<any> = new Array<any>(this.size);
        let i:number = 0;
        for(i ; i<this.size ; i++ ){
            console.log(arg);
            employeelist.push(arg);
        }
        return employeelist;
    }

    
}

let employee = new Employee(5);
let addEmployee = employee.addEmployee({name: "vicky", age:27});
console.log(addEmployee);



