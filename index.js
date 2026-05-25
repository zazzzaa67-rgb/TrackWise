// practice destructuring objects
const usertransactions = []

document.addEventListener("click" , function(e){
    const pages = document.getElementsByClassName("page")
    const historyPage = document.getElementById("history")
    const transactions = document.getElementById("transactions")
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



const form = new FormData(document.getElementById("add-form"))
function addTransaction(){
    usertransactions.push(
        `
        <div class="info">
            <h2>Transaction</h2>
            <p>Kind : ${form.get("process_type")}</p>
        </div>
        `
    )
    console.log(form.get("process_type"))
}
form.addEventListener("submit" , e => {
    e.preventDefault();
    addTransaction()
})