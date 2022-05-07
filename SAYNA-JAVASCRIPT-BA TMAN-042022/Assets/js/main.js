"use strict"
// soulignier les menus au passage du souris
let menuheader = document.querySelectorAll("li");
// console.log( menuheader);
menuheader.forEach(function(li){
    li.addEventListener('mouseover',()=>{
        li.style.textDecoration = "underline";
        li.style.color = "white";
    });
    li.addEventListener('mouseout',()=>{
        li.style.textDecoration = 'none';
    });
});
//effet hover sur les boutton de la page home  
let btnover = document.getElementsByClassName("btnover");
let i=0;
for ( i =0; i < btnover.length;i++){
    btnover[i].addEventListener('mouseover',()=>{
     btnover[i].style.backgroundimage="linear-gradient(to right, #EDDEBF 100%,#890008 100%)";
    });
    btnover[i].addEventListener('mouseout',()=>{
        btnover[i].style.backgroundimage="linear-gradient(to right,#EDDEBF 40%,#890008 60%)";
    });
};
// effet zoom de m'image et apparition du figcaption 
let scroll = document.querySelectorAll(".img");
let figcaption = document.querySelectorAll("figcaption")
console.log(scroll);
console.log(figcaption);
function image(){
    for (let i=0;i <figcaption.length;i++){
        figcaption[i].style.display="block";
    }
}
function deleteimage(){
for(let b=0;b <figcaption.length;b++){
    figcaption[b].style.display="none";
}
}
for (let a =0; a < scroll.length;a++){
   scroll[a].addEventListener('mouseover',()=>{
        scroll[a].style. transform= "scale(1.09)";
        scroll[a].style. opacity= "0.9";
        image();
     
    });
    scroll[a].addEventListener('mouseout',()=>{
       scroll[a].style.transform= "scale(1)";
       scroll[a].style. opacity= "1";
       deleteimage();
     
    });
};
// slie image 
const slideimage = document.querySelectorAll(".phot");
const nextimage = 3000;
let conterimage = 0;
slideimage[conterimage].style.display="block";
setInterval(slidesImages,nextimage);
function slidesImages(){
    slideimage[conterimage].style.display="none";
    conterimage = (conterimage + 1) % slideimage.length;
    slideimage[conterimage].style.display="block";
}
// slide citation 
const slidecitation = document.querySelectorAll(".citation1");
const nextcitation = 4000;
let contercitation = 0;
slidecitation[contercitation].style.display="block";
setInterval(slidesCitation,nextcitation);
function slidesCitation(){
    slidecitation[contercitation].style.display="none";
    contercitation = (contercitation + 1) % slidecitation.length;
    slidecitation[contercitation].style.display="block";
}
// slide bonde annence filme 
let slidefilm = document.querySelectorAll(".slide");
console.log(slidefilm);
let left = document.querySelector("#left");
console.log(left);
let right = document.querySelector("#right");
console.log(right);
var index=0;
let totalslide = slidefilm.length;

function conversion(clicked_id){
  for(let i=0;i< slidefilm.length ; i++){
    slidefilm[i].style.display="none";
    i = (i+1) % slidefilm.length;
    slidefilm[i].style.display="block";
}
}
function conversion(clicked_id){
    for(let a=0;a< slidefilm.length ; a--){
      slidefilm[a].style.display="none";
      a = (a-1) % slidefilm.length;
      slidefilm[a].style.display="none";
  }
};
// formulaire avec popup message
let bouton= document.querySelector("#confirmer");
let message= document.querySelector(".popup-message");

function Confirmer(clicked_id){
    message.style.display="block";
    };
function Confirmer(clicked_id){
    message.style.display="none";
};


