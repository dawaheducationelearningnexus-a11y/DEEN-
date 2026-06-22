// Welcome Message

window.addEventListener("load", () => {

setTimeout(() => {

alert("আসসালামু আলাইকুম। DEEN - Dawah Education & E-learning Nexus এ আপনাকে স্বাগতম।");

},1000);

});


// Smooth Animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position = card.getBoundingClientRect().top;

const screen = window.innerHeight;

if(position < screen - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});


// Initial Style

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.8s";

});
