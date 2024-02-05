// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

if(bar){// creating a function for clicking the bar
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){//on click remove to normal
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

