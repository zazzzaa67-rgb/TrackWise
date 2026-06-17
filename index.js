// practice destructuring objects
const usertransactions = []
const userincomesCon = document.getElementsByClassName("incomes") 
const userEexpensesCon = document.getElementsByClassName("expenses")
const confirmMessage = document.getElementById("confirm")
let  totalIncomes = 0
let  totalExpenses = 0 
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
const form = document.getElementById("add-form")
form.addEventListener("submit" , e=>{
    e.preventDefault()
    addtrasection()
})
function addtrasection(){
    const formData = new FormData(document.getElementById("add-form"))
    usertransactions.push(
        {
            amount : Number(formData.get("amount")),
            category : formData.get("category"),
                date : new Date().toLocaleDateString(),
                note : formData.get("note"),
                time : new Date().toLocaleTimeString(),
                selected : formData.get("process_type"),
                id : Date.now(),
            }
            )
        totalExpenses = 0 
        totalIncomes = 0 
        for(transaction of usertransactions){
            if (transaction.selected =="income"){
                totalIncomes += transaction.amount
            }else{
                totalExpenses += transaction.amount
            }
        }
        console.log(totalIncomes)
        console.log(totalExpenses)
    }
function calculation(){
    for (transaction of usertransactions){
        if (transaction.selected){}
    }
    // ##### we will start from here tomorrow 
}

function render(){

}
// console.log(totalExpenses)
// console.log(userEexpensesCon)