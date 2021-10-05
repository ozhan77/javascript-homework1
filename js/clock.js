let myname = document.getElementById("myName")
let clock = document.getElementById("myClock")
let setName = prompt("misafirler meyva sever meyva alalım")

myname.innerHTML= setName

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
