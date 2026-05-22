// practice destructuring objects
document.addEventListener("click" , function(e){
    if(e.target.id === "symbol"){
        document.querySelector("nav").classList.toggle("show")     
    }
    const pages = document.getElementsByClassName("page")

    //************ Navigation ***********/ 
    if (e.target.id == "Addbtn"){
        
        render(document.getElementById("add"))
    }else if(e.target.id == "reportsbtn"){
        render(document.getElementById("reports"))
    }else if(e.target.id == "Historybtn"){
        render(document.getElementById("history"))
    }else if(e.target.id == "settingsbtn"){
        render(document.getElementById("s"))
    }
    
    function render(item){
        for(let page of pages ){
            page.classList.remove("show")
            page.classList.add("hide") 
        }
        const show = document.getElementById(item)
        item.classList.remove("hide")
        item.classList.add("show")
    }
    
})