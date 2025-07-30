
var fruits = [ "apple" ,"mango"]
const list = [ "apple" ,"mango" , 1 ,2 , { name: "say"}]


// index
console.log( fruits[1]);
console.log( list[4].name);

// array constructor
const names = new Array("ram","say");
console.log(names);

// 
const colors = [];
 colors[0] = "red";
 colors[1] = "red";
 console.log(` my fav color ${colors[0]}`);

// push and [pop]

var num = [ 1,2,3 ,4 ,5];
 num.push(6);
 console.log(num);

 num.pop(6)
 console.log(num);

//  shift and unshift

num.shift();
console.log(num);

num.unshift(10);
console.log(num);


// slice 

let x ;
x=num.slice( 1,3);
console.log(x);

console.log(num);

// splice

var fruit =[ "mngo" ,"grapes"]


fruit.splice(0,1,"red" ,"gre")
console.log(fruit)






// question
var num = [ 1,2 ,3 ,4,5,6,7,8,9,10]

for(let a = 0 ;a < num.length; a++ ){
    console.log(num[a]);

}


// let a =[]
// for( let i = 0 ; i<10 ;i++){

// a[i]  =  parseFloat(prompt("enter a number"));
// }
//     console.log(a);




  // ARRAY OF OBJECT  // 

arr=[{name:'sayali',
    age:20},


    {name:'khushi',
    age:'21'},
    {name:'ssa',
    age:33}]
const tbody = document.querySelector('#hii tbody');

    tbody.innerHTML = arr.map(e => `
      <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
      </tr>
    `);





