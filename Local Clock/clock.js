// let clock=document.querySelector('#clock')
let clock = document.getElementById('clock');
//set interwal used to set method ,which wil after some time will run continusly
//syntax 1st parametr in function,second me time in milisecond,like 1000 or 2000
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000) 