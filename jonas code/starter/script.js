'use strict';
function Human(firstname,birthYear){
    this.firstname=firstname
    this.birthYear=birthYear

   
}
 const belal= new Human('belal',2006)
 console.log(belal)
 const soli = new Human('solyman',2005)
 Human.prototype.calc
 console.log(soli.prototype)
 console.log(Human.prototype)
 

'use strict';
// function Human(firstname,birthYear){
//     this.firstname=firstname
//     this.birthYear=birthYear

   
// }
//  const belal= new Human('belal',2006)
//  const soli = new Human('solyman',2005)
 
//  Human.prototype.calcage=function(){
//     this.age= 2026- this.birthYear
//  }
//  soli.calcage()
//  console.log(Human.prototype)
//  console.log(soli)
function Itiswhatitis(make,speed){
    this.speed=speed
    this.make=make
}

Itiswhatitis.prototype.accelerate=function(){this.speed=this.speed+10}
Itiswhatitis.prototype.brake=function(){this.speed=this.speed-5}
const car1=new Itiswhatitis('BMW',120)
const car2=new Itiswhatitis('Mercedes',95)
 car1.brake()
 car1.brake()
 car2.accelerate()
 car2.accelerate()
console.log(car1,car2)