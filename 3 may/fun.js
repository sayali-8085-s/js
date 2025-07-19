
// REGULAR FUNCTION
// there are four type to delecare function

// parameter are the variable that are passed under function paranthesis - formal value
// argument are the value that are passed when function called - actual value


// no return no parameter


function dis(){
    console.log("hii");
}
dis();

// no return with parameter

function dis(num1 ,num2){
    console.log(num1 + num2);

}
dis(2,3);

// return with parameter

function multiply(num1 ,num2){
    return num1*num2;
    // console.loh("hii") - it not print
}

let result = multiply(20,30);



// return with no parameter
function show(){
    return "hello";
}


let ans = show();
console.log(ans);

// question
function cube(num1 ){
    return num1*num1*num1;
}

let        resul = cube(prompt("enter"));
console.log(resul);


// FUNCTION EXPRESSSION

let    cubes = function (x){
    return x*x*x;
};
console.log(cubes(10));

// ARROW FUNCTION - ES6 FEATURE  - by defeault return 

const print = (name)=>{
console.log(name);
};
print("sayali");


let k =(a,b)=> a+b
alert(k(2,4))

// IIFE - imendialtyly envoke function expression




let a= prompt