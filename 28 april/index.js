var d = new Date();
console.log(d);
// new Date (year,month,day,hour,minuts,seconds,milliseconds);
d = new Date(2019,2,24,13,45,43,54);
d = new Date(2019,2,24,13,45,43);
d = new Date(2019,2,24,13,45);
d = new Date(2019,2,24,13);
d = new Date(2019,2,24);
d = new Date(2019,2);
// treated like millisecond
d = new Date(401988678668);

d=new Date(2000, 18, 35);
d = new Date("october 13, 2014 11:13:00");
//1 day = 86400000 millisecond
d = new Date(86400000);

// gives you the current date in second
const myDate  = Date.now();
console.log(myDate);

d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
 const day = d.getDay();
const date = d.getDate();
const hour = d.getHours();
const minuts = d.getMinutes();
console.log(year,month,day,date);
console.log(day);