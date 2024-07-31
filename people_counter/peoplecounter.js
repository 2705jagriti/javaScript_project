let countEl = document.getElementById("count-el")
console.log(countEl)
 let count = 0
function increment(){
    count +=1
    countEl.textContent=count
    console.log(count)
} 
 let saveEl=document.getElementById("save-el")
 console.log(saveEl)
 function save(){
    let history = count + " - "
    saveEl.textContent += history
    count=0
    countEl.innerText=count

 }


