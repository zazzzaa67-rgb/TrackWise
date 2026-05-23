// practice destructuring objects
document.addEventListener("click" , function(e){
    function showNav(){
        if(e.target.id === "symbol"){
            document.querySelector("nav").classList.toggle("show")     
        }
}
    showNav()
    const pages = document.getElementsByClassName("page")

    //************ Navigation ***********/ 
    if (e.target.id == "Addbtn"){
        
        render(document.getElementById("add"))
        showNav()
    }else if(e.target.id == "reportsbtn"){
        render(document.getElementById("reports"))
        showNav()
    }else if(e.target.id == "Historybtn"){
        render(document.getElementById("history"))
        showNav()
    }else if(e.target.id == "settingsbtn"){
        render(document.getElementById("settings"))
        showNav()
    }else if(e.target.id == "Homebtn") {
        render(document.getElementById("home-sec"))
        showNav()
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