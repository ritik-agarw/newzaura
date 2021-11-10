// function smallCard(){
//     var card = document.getElementsByClassName("card");
//     for (var i = 0; i < card.length; i++) {
//         card[i].style.height = "300px";
//         card[i].style.width = "280px";
//         card[i].getElementsByTagName("img")[0].style.height="50%";
//         card[i].getElementsByTagName("p")[0].style.fontSize = "17px";
//         card[i].getElementsByTagName("p")[0].style.lineHeight = "22px";
//         card[i].style.margin = "30px 50px";
//     }
// }
// function bigCard(){
//     var card = document.getElementsByClassName("card");
//     for (var i = 0; i < card.length; i++) {
//         card[i].style.height = "350px";
//         card[i].style.width = "350px";
//         card[i].getElementsByTagName("img")[0].style.height="70%";
//         card[i].getElementsByTagName("p")[0].style.fontSize = "20px";
//         card[i].getElementsByTagName("p")[0].style.lineHeight = "25px";
//         card[i].style.margin = "30px 80px";
//     }
// }

function activate() {

    // Get all buttons with class="btn" inside the container
    var btns = document.getElementsByClassName("nav__item");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}