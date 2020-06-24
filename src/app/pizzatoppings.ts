export class PizzaToppings {
    public toppings: any[];
    public stringRep: string = '';
    public count: number = 1;

    constructor(toppings: any[]) {
        if(toppings!=null && toppings!==undefined && toppings.length>0)
            this.toppings = toppings;
        else
            this.toppings = [];
        this.toppings = this.toppings.sort();
        this.stringRep = this.toppings.join();
    }
}