
document.addEventListener("click" , function(e){
    console.log(e.target)
    if(e.target.id === "symbol"){
        document.querySelector("nav").classList.toggle("hide")

        
    }

})