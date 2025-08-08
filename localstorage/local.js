let senddata=()=>{
    localStorage.setItem('username','sayali')
    localStorage.setItem('age','21')
    location.reload()
    // unique name other 
}

let b = document.getElementById('name')
b.innerHTML=`welcome ${localStorage.getItem('username')}`



let logout=()=>{
    localStorage.removeItem('age')
     localStorage.removeItem('username')
     location.reload()
}