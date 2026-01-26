let sentence = "I am a comma separated senntence";
let words = sentence.split(" ");
console.log(words)

let sentence1 = "I am a comma separated senntence";
let words1 = sentence1.split("a");
console.log(words1)

//Que1. find out the occurance of "r" in the given String.

let str = "tu meri me tera me teri tu mera";

let count = str.split("r").length - 1;
console.log(count);




//regular function
function demo(){
    console.log("demo")
}
demo()

function sample(a,b){
    return a+b;
}
console.log(sample(5,10))


//arrow function
// advantage: doesn't need return and function keyword and it will perform asynchronously.


const test=(c,d)=> c+d;

//if we have multiple statements then we have to add return

//const test=(c,d)=>{
//    return c+d;
//};

console.log(test(4,6))

// Anonymous function: 

let arr = [1,2,3,4,5]
let res = arr.map(function(x){
    return x+2
})
console.log(res)

// settimeout uses callback and timedelay as parameter

// setTimeout(()=>{
//     alert("hello")

// },5000)

// setInterval(()=>{
//     console.log("sign up")

// },1000)


// let date = new  Date();
// console.log(date)
