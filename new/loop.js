

for(let a = 1; a <= 5; a++) {
    for(let b = 1; b <= 5; b++) {
        document.write('*');
    }
    document.write("<br>");
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









for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=5; j++) {
        if (i === j ||  (i+j==6)) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}



for(let a = 1; a <= 5; a++) {
    for(let b = 1; b <= a; b++) {
        document.write(a);
    }
    document.write("<br>");
}



function add(num1 ,num2){
    return num1+num2;
    
}

let result = add(20,30);
console.log(result)








// function dis(num){
//     if(num%2==0 ){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }


// }
// let a = parseInt(prompt("enter "));

// dis(a);




function dis(num){
    for(let i=1; i<=10 ;i++){
        console.log(num*i)
    }
   

}
let b = parseInt(prompt("enter "));

dis(b);








function show() {
    let s = 1;
    for (let i = 1; i <= 10; i++) {
        s = s * i;
    }
    return s;
}

let ans = show();
console.log(ans);  // Output: 3628800




const print = (name)=>{
console.log(name);
};
for(let i =0 ; i<=3 ;i++){


   print(prompt('enter a number'));
}