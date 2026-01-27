var a =10;
console.log(a);
function demo(){
    let b = 20;
    console.log(b);
}

demo()

let user={
    FullName: "Abhinav",
    address: "Sohna",
    mobileno: 8222951001,
    favcolor: ["black","white","blue"]

}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user))

const car = {
    make: "Mahindra",
    model: "Thar"
};

// Object.seal(car);    // you can not add new value pair but can change the existing keys
// Object.freeze(car);  // you can not add or change keys 


car.model="XEV9E"
car.color = "Blue"; //This property addition is ignored.
console.log(car);