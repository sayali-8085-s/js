// string to number conversion
var a ="5";
a = parseFloat(a);
console.log( a ,typeof a);


// number to string
var b =45;
b = String(b);
console.log(b , typeof b);

// to boolean
b =  Boolean(b);
console.log(b,typeof b);


// template literal or template string or backticks

var text = `my age is ${a}`;
console.log(text);
// property of string
// 1) length
var x ="helllo world";

console.log(x.length);
// chart at
console.log(x.charAt(x));

// include
// replace we give 
// substring or slice
console.log(x.substring(0,3));


// practice
var x ="javascript";
var y = x.charAt(0);
var z = y.toUpperCase() +  x.substring(1) ;
// var w = z.substring(1);
 
console.log(z);


