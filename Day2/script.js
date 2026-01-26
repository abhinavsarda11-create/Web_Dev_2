// let fruit = [ "apple" , "bananas"];
// let newlenght = fruit.push("cherry");
// console.log(newlenght);//3
// console.log(fruit);

// let arr = ["ball" , "bat" , "racket" ]
// console.log(arr);
// newarr1 = arr.pop();
// newarr2 = arr.push("ball");

// newarr3 = arr.shift();

// newarr4 = arr.unshift("racket")

// console.log(arr);
//Q1
let arr = [1 , 2 , 3, 4 , 5  ]
console.log(arr);
let rev=[]
while(arr.length>0){
    rev.push(arr.pop());
    
}
console.log(rev)

//Q2
let = arr1 = [2 , -5 , 4 , -2 , -6 , 3 ,5]
console.log(arr1)

let = nonneg = []

while(arr1.length>0){
    let val = arr.shift();
    if(val>0){
        nonneg.push(val);
    }
    

}

console.log(nonneg);

//Q3.
function palindrome(){
let arr2 = [1 ,2 ,3 ,2,1]
let original = []
let revs = []
for(let i=0;i<arr.length;i++){
    original.push(arr2[i]);
}

while(arr.length>0){
    revs.push(arr2.pop())
}

for(i=0;i<original.length;i++){
    if(original[i] != revs[i]){
        return "not a palindrome"
    }
}
    return "palindrome"
}
console.log(palindrome())



// Remove duplicates from an array using these methods
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
while (dupArr.length > 0) {
    let element = dupArr.pop();
    let isDuplicate = false;
    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] === element) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueArr.unshift(element);
    }
}
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// Split even and odd numbers in given array using these methods
let evenNumbers = [];
let oddNumbers = [];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (numArr.length > 0) {
    let num = numArr.pop();
    if (num % 2 === 0) {
        evenNumbers.unshift(num);
    } else {
        oddNumbers.unshift(num);
    }
}
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]
console.log("Odd numbers:", oddNumbers); // [1, 3, 5, 7, 9]

// Move all zeros to the end of the array using these methods
let arrayWithZeros = [0, 1, 0, 3, 12, 0, 5];
let nonZeroArr = [];
let zeroCount = 0;
while (arrayWithZeros.length > 0) {
    let num = arrayWithZeros.pop();
    if (num === 0) {
        zeroCount++;
    } else {
        nonZeroArr.unshift(num);
    }
}
while (zeroCount > 0) {
    nonZeroArr.push(0);
    zeroCount--;
}
console.log(nonZeroArr); // [1, 3, 12, 5, 0, 0, 0]