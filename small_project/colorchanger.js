let buttons=document.querySelectorAll(".button");
let body = document.querySelector("body")
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click' ,function(event){
console.log(event.target);
if(event.target.id==='grey'){
    body.style.backgroundColor="grey"
}
else if(event.target.id=="pink"){
    body.style.background="pink"
}
else if(event.target.id=="lavender"){
    body.style.background="lavender"
}
else if(event.target.id=="yellow"){
    body.style.background="yellow"
}
else if(event.target.id=="lightpurple"){
    body.style.background="purple"
}


    })
})
