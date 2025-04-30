const person = {
    name:'say',
    age: 21,
    eligible : true,
    address:{
        street : 13
    },
    hobbies:["dance","sports"],

    hello: function(){
        console.log("hii")
    }

}

console.log(person.name);
console.log(person['address']);

// update value

 person.name = "sayali";
//  add new property
 person.address.city = "bhopal";
 console.log(person);

//  add new function

person.dispaly = function(){
    console.log("hello say")
};


// spread operator - copy a part of array or objet into  another / new array or object
const obj1 = {
    a:1,
    b:2,
}
const obj2= {
    c:1,
    d:2,
}

const obj3 ={...obj1,...obj2}
console.log(obj3)



// array of object - IMP IN ES6

const arr = [
    { name:"Say", age:20},
    { name:"hii", age:20},

    
];
console.log(arr[1].name + " " + arr[1].age);
console.log(`${arr[1].name}  ${arr[1].age}`);


// destructuring in array and objects - unpacking value of arry and object into variable


// in array

const des = [1,2,3,4,5,6,7,8,9,10];
// let a = des[0];

const[a,b,c,d ,...x] = des;
console.log(a,b,c,d)
// or
console.log(`${a} ${b} ${c} ${d}`);
// remain value
console.log(`${x}`);


// in object

const car = {
    color:"red",
    model:"bmw",
    year:2025,
}

const {color,model,year} = car;
console.log(color + " " + model+" " + year);

// or 

const {color:w,model:y,year:z} = car;
console.log(w + " " + y+" " + z);