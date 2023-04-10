const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navList.classList.toggle("show");
})

document.querySelectorAll(".nav-list__element").forEach(n => n.
    addEventListener("click",() => {
        hamburger.classList.remove("show");
        navList.classList.remove("show");
    }))

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealleft = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealleft < windowheight - revealpoint){
            reveals[i].classList.add("operativ")
        }

        else{
            reveals[i].classList.remove("operativ")
        }
    } 
}

window.addEventListener("scroll", header)

function header(){
    var header= document.querySelector("header")

    header.classList.toggle("sticky", window.scrollY > 0)
}