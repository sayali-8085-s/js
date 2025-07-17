// function say() {
//    let a= document.getElementById("text")
   
    
//     a.style.backgroundColor='red'
    
// }

// function sam() {
//    let a= document.getElementById("text")
   
//     a.style.backgroundColor='green'
    
// }


// function first() {
//      let a= document.getElementById("first")
//      a.style.backgroundImage =" URL('C:\Users\DELL\OneDrive\Desktop\js\dom\index.css')"
//      a.style.backgroundSize = "cover"
    
// }

// function textcolor1(){
//     let a= document.getElementById("first")
//      a.style.backgroundColor='red'
    

// }


// function second() {
//      let b= document.getElementById("second")
//      b.style.backgroundColor='green'
    
// }

// function textcolor2(){
//     let b= document.getElementById("second")
//      b.style.backgroundColor='green'
    

// }


function first() {
     let a= document.getElementById("main")
      a.style.backgroundImage ="url('dog.webp')"
   
}

function first1() {
     let a= document.getElementById("main")
      a.style.backgroundImage ="url('download.jpeg')"
   
}

function first2() {
     let a= document.getElementById("main")
      a.style.backgroundImage ="url('dog.webp')"
   
}





function sa(){
      let a= document.getElementById("cmg")
      a.src="dog.webp"

}

// function one(){
//       let a= document.getElementById("one")
//       a.style.display='none'
// }

// function two(){
//       let a= document.getElementById("one")
//       a.style.display="block"
// }





//   function one() {
//     let a = document.getElementById("one");

//     if (a.style.display === "none") {
//         a.style.display = "block";
//     } else {
//         a.style.display = "none";
//     }
// }



// or 
let isVisible = false; 
function one() {
    const a = document.getElementById("one");

    if (isVisible) {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }

    isVisible = !isVisible; 
  }





function submit()  {
      let b = document.getElementById("text").value
      let a = document.getElementById("tex").value
      alert(parseFloat(b)+parseFloat(a))
}