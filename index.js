var randomNum1=Math.floor(Math.random()*6)+1;
var randomImg1="images/"+"dice"+randomNum1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImg1);

var randomNum2=Math.floor(Math.random()*6)+1;
var randomImg2="images/"+"dice"+randomNum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImg2);

if(randomNum1>randomNum2)
{document.querySelector("h1").innerHTML="Player1 wins"}
else if(randomNum2>randomNum1)
{document.querySelector("h1").innerHTML="Player2 wins"}
