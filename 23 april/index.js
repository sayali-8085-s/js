// math object

var a = Math.PI;
console.log(a);

// squareroot
console.log(Math.sqrt(100));

// absolute
let output;
output =  Math.abs(-78);
console.log(output)

// takes uper value and round off
output = Math.ceil(5.17);
console.log(output);

// floor (takes lower value)
output = Math.floor(5.17);
console.log(output);

// round
output = Math.round(5.17);
console.log(output);

// it always return integer like floor
output = Math.trunc(5.17);
console.log(output);

// return -1 if negative and 1 if positive
output = Math.sign(5);
console.log(output);
// power
output = Math.pow(2,4);
console.log(output);
// min and max
output = Math.min(2,4,5);
console.log(output);
// random value return between 0 and 1
output = Math.random();
// return random between 0 to 10

// roll the dice game

output = Math.floor(Math.random() * 6)+1 ;
// output = Math.floor(Math.random() * 10) +1  ;
// output = Math.floor(Math.random() * 9000) +1000  ;

console.log(output);

// practice
// var x =  Math.floor(Math.random() * 100) + 1 ;
// var y =  Math.floor(Math.random() * 50) + 1 ;
// var sum = x+ y;
// console.log(sum);
// var diff = x - y ;
// console.log(diff); 
// var product = x * y ;
// console.log(product);
// var reminder = x % y;
// console.log(reminder);


// SET TIMEOUT AND SET INTERVAL
// stop watch
var a 
let c=0
let ok=()=>{

     a = setInterval(()=>{
     let b = document.getElementById('hii') 
     b.innerHTML = c
        c++
    },
        1000
    )
}

let sto=()=>{

    clearInterval(a)
        
    
}

// sirf 10 tk hi chle

// var a 
// let c=0
// let ok=()=>{

//      a = setInterval(()=>{
     
        
//     if(c <=10) {
//         let b = document.getElementById('hii') 
//         b.innerHTML = c
      
//     }   c++
//     },
//         1000
//     )
// }

// let sto=()=>{

//     clearInterval(a)
        
    
// }
