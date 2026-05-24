// practice destructuring objects

document.addEventListener("click" , function(e){
    const pages = document.getElementsByClassName("page")
    const historyPage = document.getElementById("history")
    const transactions = document.getElementById("transactions")
    const usertransactions = []
    //************ Navigation ***********/ 
    if (e.target.id == "Addbtn"){
        
        render(document.getElementById("add"))
        hideNav()
    }else if(e.target.id == "reportsbtn"){
        render(document.getElementById("reports"))
        hideNav()
    }else if(e.target.id == "Historybtn"){
        render(document.getElementById("history"))
        hideNav()
    }else if(e.target.id == "settingsbtn"){
        render(document.getElementById("settings"))
        hideNav()
    }else if(e.target.id == "Homebtn") {
        render(document.getElementById("home-sec"))
        hideNav()
    }
    if(e.target.id == "add-info" ){
        addform.addEventListener("submit" , e => {
            e.preventDefault()
            const data = new FormData(addform)
            const addform = document.getElementById("add-info")
            const usaddinfo = document.getElementsByClassName("adding-info")
            usertransactions.push(
                `<div>

                </div>
                `
            // We will Start from here After 2 Hours man **********
            )
            
            
        } )


    }
    function showNav(){
        if(e.target.id === "symbol"){
            document.querySelector("nav").classList.toggle("show")     
        }
    }
    showNav()
    function hideNav(){
        document.querySelector("nav").classList.remove("show")
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