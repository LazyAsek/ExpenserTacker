
const lists = document.querySelector(".lists")
let list

let amounts = []

function createDate(){
    let date =document.createElement("input")
    date.setAttribute("type","text")
    date.setAttribute("class","date")
    list.appendChild(date)
}

function createexpense(){
    let expense =document.createElement("input")
    expense.setAttribute("type","text")
    expense.setAttribute("class","expense")
    list.appendChild(expense)
}

function createcategory(){
    let category =document.createElement("input")
    category.setAttribute("type","text")
    category.setAttribute("class","category")
    list.appendChild(category)
}

function createamount(){
    let amount =document.createElement("input")
    amount.setAttribute("type","text")
    amount.setAttribute("class","amount")
    amount.style.width = "291px"
    amount.setAttribute("id","amount")
    amount.value = 0
    list.appendChild(amount)
}



function createList(){
    list =document.createElement("div")
    list.setAttribute("class","list")
    createDate()
    createexpense()
    createcategory()
    createamount()
    lists.appendChild(list)

}

createList()



function allAmount(){
    amounts = document.querySelectorAll("#amount")
    let all = 0
    for(i=0;i<amounts.length;i++){
        all += parseInt(amounts[i].value)
    }
    document.getElementById("total").innerHTML= "Total:"+all
}
