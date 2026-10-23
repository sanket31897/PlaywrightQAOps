

//Reverse string and check if its palindrome
const str = "SANKET";

let reversed = "";

for(let i=str.length-1; i>=0; i--){
       reversed = reversed+ str[i];

}
console.log(reversed);

if(str===reversed){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}


//Find Duplicates
const arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8];

let duplicates = [];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j] && !duplicates.includes(arr[i])){
               duplicates.push(arr[i]);
        }
    }
}

console.log(duplicates);

//Find largest number in a array

const arrt = [10, 25, 38, 45, 88, 16, 7, 67];

let largest = arrt[0];

for(let i=1; i<arrt.length; i++){
         if(arrt[i]>largest){
            largest=arrt[i];
         }
}
console.log(largest);
//Give count of each character of string/occurence of each char in string

const strr = "Automation";

let count= {};

let string = strr.toLowerCase();

for(let char of string){
    if(count[char]){
        count[char]++;
    }
    else{
        count[char]=1;
    }
}

console.log(count);



//Give count of each word of string/occurence of each word in string

const stri = "I i am am an auto auto automation engineer by by default";

const words = stri.toLowerCase().split(" ");

let countt= {};

for(let word of words){
    if(countt[word]){
        countt[word]++;
    }
    else{
        countt[word]=1;
    }
}

console.log(countt);
let jsonO = JSON.stringify(countt);
console.log(jsonO);
let JsObj = JSON.parse(jsonO);
console.log(JsObj);


//Remove duplicates from an array

const Input=[1, 2, 2, 3, 4, 4, 5];

let Output = [];

for(let i=0; i<Input.length; i++){
   
        if(!Output.includes(Input[i]) ){
            Output.push(Input[i]);
        }
    
}
console.log(Output);

//finding the second-largest distinct number without using sort()

const arrs = [10, 25, 38, 45, 88, 16, 88];

let largest1 = arrs[0];

let slargest = [];

for(let i=0; i<arrs.length; i++){
    //if(arrs[i]>largest1){
       // largest1= arrs[i];
      if(arrs[i]>=largest1&& !slargest.includes(arrs[i])){
        slargest.push(arrs[i]);
      }

   // }
}
console.log(largest1);
console.log(slargest);
