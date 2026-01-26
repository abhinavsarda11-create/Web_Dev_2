//take a array with length 10 and put 10 different student marks in between 0 to 40 and check which student marks is passed or fail(passing marks is 16) using filter method

let marks = [14 , 23 ,32 , 25 , 17 , 12 , 8 , 37 , 9 , 24 , ] ;
let passed = marks.filter((x)=>{
    if(x >= 16){

console.log(x, "pass");
}
else{
    console.log(x,"fail")
}
});

//Que2. find the sum of all the elements inside an array with for loop.

let arr= [1 , 2,3 , 4, 5 , 6];
let sum= 0 ;
for(let i=0 ; i<arr.length ; i++ ){
    sum=sum +arr[i];

}
console.log(sum);
//Nested loop
// for(i=0 ; i <= 5 ; i++){
//     for(j=0 ; j <=i ; j++){
//         console.log(j);
//     }
//     console.log(i);
// }