const Person = require('./basics7')

let day = "Tuesday "
//length of string
console.log(day.length)
//retrive substring 
let subDay= day.slice(0,4)
console.log(subDay)
//print character at a specfific index
console.log(day[3])

//Split a string based on a character
let splitDay = day.split("s")
console.log(splitDay[1])
console.log(splitDay[1].length)

//trim the whitespaces at start or in the end of the string
console.log(splitDay[1].trim().length)

console.log("----------------------------------------------------------------")
//convert string to Integer
let date = "23"
let nextDate = "27"
let diff = parseInt(nextDate) + parseInt(date)

console.log(diff)

//convert Int to String
console.log(diff.toString())

// JavaScript does some automatic type conversion depending on the operator.
// -, *, / → usually convert strings to numbers.
// + → can concatenate strings instead. (this needs parseInt)


//concatenate 2 strings
let newQuote = day + "is Funday day"
console.log(newQuote)

//find index of any character from string
console.log(day.indexOf("a"))

console.log(newQuote.indexOf("day"))

//If we want to find index of day from Funday
let val = newQuote.indexOf("day",5)
console.log(val)

//if we want to find how many times day occured in the string
let count = 0
let value = newQuote.indexOf("day")
while(value!==-1){
    count++
    value = newQuote.indexOf("day", value+1)

}
console.log(count)






let countt = 0
let namee = "Sanket Prakash Chaudhari"

let set = namee.indexOf("a")

while(set!==-1){
     countt++
     set = namee.indexOf("a",set+1)
}

console.log(countt)

let person = new Person("Chris", "Martin")
console.log(person.fullName())