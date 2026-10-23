//var marks = Array(6)
//var marks = new Array(20, 40, 35, 12, 37, 100)

var marks=[20, 40, 35, 12, 37, 100]
console.log(marks[2])             //Print element at specific index

marks[3] = 14                     //reassign value of a element at specific index          
console.log(marks)                 
console.log(marks.length)         //count the length of the array

marks.push(65)                    //add new a element in the array
console.log(marks)  

marks.pop()                //removes element from the last index of the array
console.log(marks)

marks.unshift(77)          //adds element at the beginning of the array
console.log(marks)

c= marks.indexOf(100)       //find index of any element in the given array
console.log(c)

//find if 120 is present in the array or not
console.log(marks.includes(120))

//To create a sub array (of specifc index range) from the main array 
marks2=marks.slice(3,6)
console.log(marks2)

//to sum all the elements in array and then print the total
// sum =0
// for(i=0; i<marks.length; i++){
//     sum = sum + marks[i]
// }
// console.log(sum)

console.log("----------------------------------------------------------------")


//Functions in Array
//Reduce
var total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

console.log("----------------------------------------------------------------")

//Filter function 

//Create a new array of even numbers from scores array
var scores=[12, 13, 14, 16]
var evenScores = []
for(let y=0; y<scores.length; y++){
    if(scores[y]%2==0){
      evenScores.push(scores[y])
     
    }
    
}
 console.log(evenScores)

 console.log("================================================================")

 evenscoreVal= scores.filter(score=>score%2==0)
 console.log(evenscoreVal)

 console.log("________________________________________________________________")
//Map function 
//Get a array with even numbers and multiply each element with 3 and get a new mapped array
 mapscores= evenscoreVal.map(score=>score*3)
 console.log(mapscores)

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

 // now sum all values from the mapped array

 addmapscores = mapscores.reduce((summ,score)=>summ+score,0)
 console.log(addmapscores)

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|||||||||||||||||||||||||||||")

 var scores1 = [12,13,14,16]
 let sumVal = scores1.filter(r=>r%2==0).map(t=>t*3).reduce((s,m)=>s+m,0)
 console.log(sumVal)

 

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|||||||||||||||||||||||||||||")

//String array ssorting

let fruits = ["banana", "mango","pomogranate","apple"]
//asc order
console.log(fruits.sort())
//desc order 

console.log(fruits.reverse())

//Number array sorting

var scores2 = [12, 3, 16, 14, 13, 18]
//asc order sort
let sortScores2 = scores2.sort((a,b)=>a-b)
console.log(sortScores2)

//desc order sort

let sortScores3 = scores2.sort((a,b)=>b-a)
console.log(sortScores3)

const str = "MADAM";

let reversed = "";

for (let i=str.length-1; i>=0; i--){
         reversed = reversed + str[i];
}

console.log(reversed);

if(str===reversed){
 console.log("Is Palindrome");
}
else{
 console.log("Is not Palindrome");
}