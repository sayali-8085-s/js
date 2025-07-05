// let num1 = parseInt(prompt("enter a value"))
// // let num2 = parseInt(prompt("enter a value"))
// console.log(3.14*num1*num1)


// let num1 = parseInt(prompt("enter a value"));
// let num2 = parseInt(prompt("enter a value"));
// let num3 ;

// num3 = num1
// num1 = num2
// num2 = num3

// console.log(num1)
// console.log(num2)


// let n = parseInt(prompt("enter a value"));

// if(n>0){
//     console.log('positive')
// }


// else{
//     console.log('negative')
// }


// let n = parseInt(prompt("enter a value"));
// let m = parseInt(prompt("enter a value"));

// if(m%2==0){
//         console.log(m)
//  }


//  else{
//     console.log(n*m)
//  }



// lader if else - multiple condition
// let a = parseInt(prompt("enter a value"));
// let b= parseInt(prompt("enter a value"));
// let c = parseInt(prompt("enter a value"));
// let d =( a+b+c)
// let e = (d /300)*100
// if(e>=70){
//    console.log('a grade')

// }

// else if (e>=50){
//    console.log('b grade')

// }

// else{
//    console.log('c grade')

// }


// nested 
// let a = parseInt(prompt("enter a age"));



// if(a>=18){
//    let b = parseInt(prompt("enter a 1 indain"));
//    if(b==1){
//       console.log('eligible')
//    }
//    else{
//       console.log('not eligible')
//    }

// }

// else{
//    console.log('minor')
// }



// loop
// do while ,while, for of ,for in ,forEach

//  let num =10 
//  let b = parseInt(prompt("enter a 1 indain"));
//  do {
//    console.log(b*num);
//    num--
   
//  }

//  while(num>=1);
  

//  for(let a=1 ; a<=20; a++){
//      if( a%2==0){
//         console.log(a*a)
//  }


// }


// for( let a=2 ; a<=3 ;a++){
//     for( let b=1 ; b<=10 ; b++){
//         console.log(a*b);
//     }
// }



// for(let a=1 ; a<=5;a++){
//     for(let b=1 ; b<=5;b++ ){
//        document.write("*")
//     }
    //  document.write("<br>")
    
console.log('hii')

for(let a =1 ; a<=5 ;a++){
    for( let b = 1 ; a<=5 ;b++){
        if(a==1 || a==5 || b==1 || b==5){
            document.write("*")
        }
        else{
            document.write('$nbsp$nbsp')
        }
    }
    document.write("<br>")
}



for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= 5; b++) {
        if (a == 1 || a == 5 || b == 1 || b == 5) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
