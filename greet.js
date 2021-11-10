var img = document.getElementById("time");
var greet = document.getElementById('greet');

function time() {
    var d = new Date();
    var h = d.getHours();
    if(h >= 5 && h < 12){
        img.src = 'sunset.png';
        greet.textContent = "Morning";
    }
    else if(h >= 12 && h < 17){
        img.src = 'sun.png';
        greet.textContent = "Afternoon";
    }
    else{
        img.src = 'moon.png';
        greet.textContent = "Evening";
    }
}

 setInterval(time, 1000);