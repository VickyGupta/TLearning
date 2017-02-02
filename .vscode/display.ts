interface IDemoNumber{
    GenerateNos() :  Array<number>;
}

class DemoNumber implements IDemoNumber{
    private size : number;
    constructor(_size : number){
        this.size = _size;
    }
    public GenerateNos() :  Array<number>
        {
        let list : Array<number> = new Array<number>(this.size);
        let i:number = 0;
        for(i ; i<this.size ; i++ ){
            list[i] = i+1;
        }
        return list;
    }

    // public calculateNo(){

    // }
}



let listNumber = new DemoNumber(10);
let x = listNumber.GenerateNos();

x.forEach(element => {
    console.log(typeof(element));
    console.log(element);
});







