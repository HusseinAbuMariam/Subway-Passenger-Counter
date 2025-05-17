const inputBtn=document.querySelector("#input-btn")
let myLeads=[]
const inputEl=document.querySelector("#input-el")
const ulEl=document.querySelector("#ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const deleteEL=document.querySelector("#delete-btn")
const tabBtn=document.querySelector("#tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})



function render(leads){
let listItems=""
for(let i=0;i< leads.length;i++){
    listItems+=`
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
     </a>
    </li>
    `
}
ulEl.innerHTML=listItems
}
deleteEL.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
})

function clearInput(){
    inputEl.value=""
}
