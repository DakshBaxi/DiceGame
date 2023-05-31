 var rn1 = Math.floor(Math.random()*6) + 1;

 var randomimage = rn1 + ".png";

 var randomimagesource = "images/" + randomimage;

 var img1 = document.querySelectorAll("img")[0];

 img1.setAttribute("src", randomimagesource);


var rn2 = Math.floor(Math.random()*6) + 1;

var randomimagesource2 = "images/" + rn2 + ".png";

document.querySelector(".img2").setAttribute("src",randomimagesource2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML = "Player 1 Win 🚩";
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw Try again";
}