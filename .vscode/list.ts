interface IList<T>{
    add(arg:T);
    get(): Array<T>;
    find(arg:T): T;
    //removeAt : () => { };
}

class List<T> implements IList<T> {
    public Items : Array<T>;
    constructor(){
        this.Items = new  Array<T>();
    }
    public add(arg:T){
        this.Items.push(arg);
    }
    public get(): Array<T>{
        return this.Items;

    }

    // function removeAt(): void{

    // } 
    public find(arg:T): T{
        let i:number = 0;
        let Item : T;
        for(i;i<this.Items.length;i++){
            if(arg == this.Items[i]){
                Item = this.Items[i];
            }
        }
        return Item;
    }


}


class EmployeeV2{
    private id:number;
    private name: string;
    //private department : Department;
    constructor(id:number, name:string){
        this.id=id;
        this.name = name;
        //this.department = department;
    }
}

// class Department{
//     private id : number;
//     private name : string;
//     constructor(id:number, name:string){
//         this.id = id;
//         this.name = name;
//     }
// }


// class DepartmentManager{
//     public departments : List<Department>;
//     public addDepartment (dep : Department){
//         this.departments.add(dep);
//     }

//     public getDepartment () {
//        return  this.departments.Items;
//     }


// }


class EmployeeManager {
    
    public employees : List<EmployeeV2>;
    constructor(){
        this.employees = new List<EmployeeV2>();
    }
    public addEmployee(emp: EmployeeV2){
        this.employees.add(emp);
        //this.employees.Items;
    }

    public findEmployee(emp: EmployeeV2) : EmployeeV2{
        return this.employees.find(emp);
    }
}




let employee1 : EmployeeV2 = new EmployeeV2(1, "vicky");
let employee2 : EmployeeV2 = new EmployeeV2(2, "tezendra");
let empM = new EmployeeManager();
empM.addEmployee(employee1);
empM.addEmployee(employee2);

console.log(empM.employees);
