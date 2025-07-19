const list = ["mango" , 1 ,2 , { name: "say"}]
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



// exixt
let arr =[1,2,4,4,6]
let b =6;
let found =false;
for(let a =1 ; a<arr.length ;a++){
    if ( arr[a] ===b){
        found=true;
        break;
    }

}

if (found){
    console.log('find');
}

// ass
let gg =[8,9,6,5,4]
for(let i =0; i<gg.length ; i++){
    for(let j =i+1; j<gg.length ; j++){
        if(gg[i] > gg[j]){
            let temp =gg[i]
            gg[i] =gg[j]
            gg[j]=temp
        }


    }
}

console.log(gg)



let aa =[1,5,6,7]
let c=7
let d
if(aa.includes(c)){
    console.log('find')
}


// reverse
let aaa =[1,5,6,7]
let e =[]
for(let g = aaa.length; g>=0;g--){
  e.push(aa[g])
}
console.log(e)


// without

let aaaa=[1,5,6,7]
let f =[]
let r=0
for(let g = aaaa.length; g>=0;g--){
  f[r]=aaaa[g]
  r++
}
console.log(f)



// even odd 
let rr =[1,2,3,4,5,6,7,8]
let even =0
let odd =0

for(let v of rr){
    if(v%2===0){
        even++
    }
    else{
        odd++
    }
}

console.log('even',even)
console.log(odd)




// max



// let dd = [4, 5, 6, 7];
// let m = dd[0];

// for (let v of dd) {
//     if (v > m) {
//         m = v;
//     }
// }

// console.log(m); // Output: 7



// sum
// let sum=0
// let app =[]
// for(let a =1 ;a<5 ;a++){
//     app[a] =  parseInt(prompt('enter'))
// }

// for(let b =1 ;b<5 ;b++){
//     sum=sum+app[b]
// }

// console.log(sum)



// concat


// let y=[2,3,4,6,6,7,7]
// let x=[8,9]
// let z=[]

// for(let v =0;v<y.length; v++){
//     z.push(y[v])
// }

// for(let i =0; i<x.length ; i++){
//     z.push(x[i])
// }

// console.log(z)


// reverae

// let y=[2,3,4,6,6,7,7]
// let z=[]
// for(let v =y.length;v>0; v--){

//     z.push(y[v])
// }

// console.log(z)

// let y=[2,3,4,6,6,7,7]
// let enven =0
// let od =0
// for(let v in y){
//     if(v%2==0){
//         enven++
//     }
//     else{
//         od++
//     }
// }
// console.log(enven)
// console.log(od)


// let v = y[0]
// for(let i =0; i<y.length ; i++){
//    if( y[i] > v){
//     v =y[i]
//    }

// }let y=[2,3,4,6,6,7,7]
// console.log(v)



// reverse
let m=[2,3,4,6,6,7,7]

let n =[]


for( let i =m.length ;i>0; i--){
    n[n.length] =m[i]
}

console.log(n)



var nu =  'bhoapl,hiii ,hii'
console.log( nu.replace('bhoapl' ,'hii'  ))



let a=
const print = (name)=>{
console.log(name);
};
print("sayali");
