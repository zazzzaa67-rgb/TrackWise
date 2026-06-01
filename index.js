// practice destructuring objects
const usertransactions = []

document.addEventListener("click" , function(e){
    const pages = document.getElementsByClassName("page")
    const historyPage = document.getElementById("history")
    const transactions = document.getElementById("transactions")
    //************ Navigation ***********/ 
    if (e.target.id == "Addbtn" || e.target.classList.contains("fa-plus") ){
        
        render(document.getElementById("add"))
        hideNav()
    }else if(e.target.id == "reportsbtn" || e.target.classList.contains("fa-chart-bar")){
        render(document.getElementById("reports"))
        hideNav()
    }else if(e.target.id == "Historybtn" || e.target.classList.contains("fa-clock-rotate-left")){
        render(document.getElementById("history"))
        hideNav()
    }else if(e.target.id == "settingsbtn" || e.target.classList.contains("fa-bars-staggered")){
        render(document.getElementById("settings"))
        hideNav()
    }else if(e.target.id == "Homebtn" || e.target.classList.contains("fa-house")) {
        render(document.getElementById("home-sec"))
        hideNav()
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
function addtrasection(){
    const form = document.getElementById("add-form")
    const formData = new FormData(form)
    const selected = formData.get("process_type")
    const amount = formData.get("amount")
    const category = formData.get("category")
    const date = formData.get("date")
    const note = formData.get("note")
    const time = formData.get("time")
    usertransactions.push(
        // tomorrow I will push the object
        `
        `)
    
    


    if(!selected){
        console.log("select incomes or expenses ")
    }
    

}
console.log( new Date())
form.addEventListener("submit" , e => {
    e.preventDefault();
})
