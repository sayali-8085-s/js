const person ={
    name:"say",
    age:21,
}
// console.log(person);
// convert to jason - it act as string

const data = JSON.stringify(person);
// console.log(data);


// json string to object

const mydata = JSON.parse(data);
// console.log(mydata);



// question

const library = [

  {
title: "say",
author: "singh",
status :{ 
    own:'true',
    reading:'false',
    read:'false',
}
}


];



library[0].status.read = 'true';
const [firstbook] = library;
console.log(library);

const datas = JSON.stringify(library);
console.log(datas);