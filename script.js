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

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Az input mezők kitöltése kötelező!");
    } else {
      var params = {
        from_name: name,
        from_email: email,
        message: message
      };
  
      const serviceID = "service_th3u9r4";
      const templateID = "template_fdci10p";
  
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Köszönöm, hogy megkerestél! Igyekszem gyorsan válaszolni.");
        })
        .catch((err) => console.log(err));
    }
  }
    
    

