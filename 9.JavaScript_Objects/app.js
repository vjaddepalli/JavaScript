//----------Objects---------------

let laptop={
    RAM : '500GB',
    HDD : '1TB',
    CPU : 'intel (i7)',
    Price : 30000,
    Brand : 'Lenovo',
    //nested object creation
    seller : {
        name : 'ABC electronics',
        cell : 9999999999

    }
}
console.log(laptop)

//access property of an object
console.log(`Laptop Price: ${laptop.Price}`)

//access property of an object using dot, [] notation
console.log(`Laptop Brand is : ${laptop.Brand}`)
console.log(`Laptop RAM : ${laptop['RAM']}`)

//access undefined property
console.log(laptop.power) //undefined

//dynamic property allocation
laptop.madeIn='china'
console.log(laptop)

//CRUD Operations with Objects

//----Creation----
let mobile={}
mobile.brand='samsung'
mobile.modal='Galaxy A50'
mobile.processor='Exynos'
mobile.madeIn='koria'

//-----Read--------
console.log(mobile)
console.log(`Mobile Processor : ${mobile.processor}`)

//-----Update-----
mobile.processor='Exynos 650'
console.log(`Mobile Processor : ${mobile.processor}`)

//-----Delete----
delete mobile.processor
console.log(mobile)
