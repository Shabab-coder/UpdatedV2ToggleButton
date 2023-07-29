btn = document.querySelector(".switch-off");
toggleButton = document.querySelector(".toggle-button");
btn.addEventListener("click", ()=>{
    btn.classList.toggle("switch-on");
    toggleButton.classList.toggle("toggle-button-on");
    if (btn.classList.contains("switch-on")){
        document.body.style.backgroundColor = "black";
        document.querySelector(".heading").style.color = "white";
        // document.querySelector(".toggle-button-on").style.backgroundColor = "green";
    }else{
        document.body.style.backgroundColor = "white";
        document.querySelector(".heading").style.color = "black";
        // document.querySelector(".toggle-button").style.backgroundColor = "#b3abab";
    }
    
});