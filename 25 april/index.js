// var d = new Date();
// console.log(d);

// // new Date(year,month,day,hours,minute,second,milisecond)

// // moth start from 0 - jan to 11 -dec and it can alsp be above 11 
// var d = new Date( 2019,2,21,12,40,30,43);
// console.log(d);

// var d = new Date( 2019,2);
// console.log(d);

// // one value treated like milisecond and  we can give two value
// var d = new Date(20986755);
// console.log(d); 


// // or we can give date jan 1 ,1970.00:00


// // date.now - give current date in milisecond  1 day = 86400000 milisec

// const mydate = Date.now();
// console.log(mydate);

// // get year by new Date
// var d = new Date();
// const year = d.getFullYear();
// const month = d.getMonth();
// const days = d.getDay();
// const date = d.getDate();
// const min = d.getMinutes();
// console.log(year,month,day,date,min);

// var a = (prompt("enter  a name"));
// var b = parseFloat(prompt("enter a age "));
// var c = (prompt("enter a qualification "));
// console.log ( a , b ,c);

// var a = parseFloat(prompt("enter  a temp"));
// var b = ( a* 1.8)+32;
// console.log( "temp = ",b);

var a = (prompt("enter  a name"));
var b = parseFloat(prompt("enter  a pass"));

if(  a = "say " &&  b<=9999 && b>=1000  ){
    console.log( "suss");
}

else{
    console.log("wrong pass")
}