module.exports = class Person {

     age = 24

  get location(){
       return "Canada"
  }

  constructor (firstName, lastName){
        this.firstName= firstName
        this.lastName=lastName
        //console.log(this.firstName+" "+this.lastName)
  }

  fullName(){
       console.log(this.firstName+" "+this.lastName)
  }

}

// let person = new Person("Tom", "Cruise")
// let person1 = new Person("Ben","John")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())