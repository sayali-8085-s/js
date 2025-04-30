const fruit =[ "mngo" ,"grapes"];
// splice

console.log(fruit.splice(1,2,"mango"))
// reverse
fruit.reverse();
console.log(fruit);


// array to string conversion

let x = fruit.toString();
x = fruit.join();
console.log(x ,typeof(x));

// string to array

x = x.split(",");
console.log(x ,typeof(x));


// 
// console.log(fruits.slice().toString())


// concatination in array

 const num1 =[1,2,3,4,5];
const num2 = [10,20];
console.log(num1.concat(num2));

// spread (....)  - it copy element
const newnum =[...num1, ...num2];
console.log(newnum);


// prac

const arr = [1,2,3,4,5]
arr.unshift(0)
arr.push(6)
arr.reverse()
console.log(arr)

// 

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10]
const newnums =[...arr1, ...arr2];

console.log(newnums.splice(4,1,))
console.log(newnums)