const list = [ "apple" ,"mango" , 1 ,2 , { name: "say"}]
console.log(list)



// let a =[]
// for( let i = 0 ; i<10 ;i++){

// a[i]  =  parseFloat(prompt("enter a number"));
// }
   
// for(let b= 0 ;b < a.length; b++ ){
//     console.log(a[b]);

// }


// 



// let sum =0
// var num =  [ 1,2 ,3 ,4,5,6,7,8,9,10]

// for(let a = 0 ;a < num.length; a++ ){
//       if( num[a]%2 !=0){
//          sum =sum+num[a]
//     }
// }
// console.log(sum)



// FOR OF LOOP - to fetch the value from array without indexing

// var num =  [ 1,2 ,3 ,4,5,6,7,8,9,10]

// for(let v of num){
//     console.log(v)
// }



// FOR IN LOOP - GETor fetch  INDEXING OF ARRAY ELEMAENT

// var num =  [ 1,2 ,3 ,4,5,6,7,11,9,10]

// for(let v in num){
//     console.log(v)
// }




// let sum =0

// var num =  [ 11,12,13,14,15,16,17,18,19,20]
// for(let v of num ){
     
//          sum =sum+v
    
// }
// console.log(sum)


// METHOD

// push - to add multiple element in last 
// var num =  [ 11,12,13,14,15,16,17,18,19,20]
// num.push('werwt','say')
// console.log(num)



// // pop - 
// var num =  [ 11,12,13,14,15,16,17,18,19,20]
// num.pop()
// console.log(num)


// // unsift

// var num =  [ 11,12,13,14,15,16,17,18,19,20]
// num.unshift('say')
// console.log(num)


// // shift

// var num =  [ 11,12,13,14,15,16,17,18,19,20]
// num.shift()
// console.log(num)



// slice

// var num =  [ 11,12,13,14,15,16,17,18,19,20]
//  let s =num.slice(1,4)
// console.log(s)



// let a =[1,2,3,4,5,6,7,8,9,10]

// let s =a.slice(3,9)
// for(let v of s ){

//     if(v%2==0){
//         console.log(v)
//     }


// }



// SPLICE - remove add (index of start,   of element to delete,   elemt to add )

var num =  [ 11,12,13,14,15,16,17,18,19,20]
 num.splice(2 ,1 ,20  )
console.log(num)
