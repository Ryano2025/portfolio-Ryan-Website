const navMenu=document.querySelectorAll(".nav-session");
const homevar=document.querySelector("#Home");
homevar.classList.add("active");
navMenu.forEach(button=>{
    button.addEventListener("click",()=>{
        navMenu.forEach(btn=>{
            btn.classList.remove("active")
            if (button.innerText!=="Home"){
                homevar.classList.remove("active");
            }
      
    })
        button.classList.add("active");
    })
});