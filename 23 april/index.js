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

// it always return integer
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
output = Math.floor(Math.random() * 10);
output = Math.floor(Math.random() * 10) + 1 ;

console.log(output);

// practice
var x =  Math.floor(Math.random() * 100) + 1 ;
var y =  Math.floor(Math.random() * 50) + 1 ;
var sum = x+ y;
console.log(sum);
var diff = x - y ;
console.log(diff); 
var product = x * y ;
console.log(product);
var reminder = x % y;
console.log(reminder);
