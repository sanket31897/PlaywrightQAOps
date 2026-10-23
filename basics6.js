let person ={

    firstName :"Michael",
    lastName :"Scott",
    age : 35,
    fullName : function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
console.log(person.fullName())
console.log(person.lastName)

console.log(person['lastName'])

person.firstName = 'Dwight'
console.log(person.firstName)

person.gender = "Male"
console.log(person)

delete person.gender
console.log(person)

for(let key in person){
    console.log(person[key])
}