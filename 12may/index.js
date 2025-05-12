let button = document.getElementById("btn");
button.addEventListener("click",change);
function change(){
    let img = document.getElementById("myimg");
    img.src="dog.webp";
};

button.addEventListener("mouseenter",display);
function display(){
    let h1 = document.getElementById("demo");
    h1.innerHTML ="hello";
}

// to remove evenli
button.removeEventListener("click",change)