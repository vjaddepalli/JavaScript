//---------oops class-----------

class Mobile{
    constructor(brand,price,color){
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    getBrand(){
        return this.brand;
    }
    setBrand(brand){
        this.brand=brand;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price=price;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    printDetails(){
        let details=` Brand : ${this.getBrand()} \n Price : ${this.getPrice()} \n Color : ${this.getColor()}`;
        console.log(details);
    }
}
let mobiles = new Mobile('Samsung',25000,"white");
mobiles.printDetails();
mobiles.setPrice(35000);
mobiles.setColor('Blue');
mobiles.printDetails();

