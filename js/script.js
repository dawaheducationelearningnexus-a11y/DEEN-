// =============================
// DEEN PREMIUM SCRIPT
// Knowledge Changes Lives
// =============================


// Page Loaded Effect

window.addEventListener("load", () => {

document.body.style.opacity = "1";

console.log("DEEN Website Loaded Successfully");

});


// Smooth Reveal Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".card,.course-card,.gallery-grid img,.welcome-content,.welcome-image,.vision,.contact-section"
).forEach((el)=>{

observer.observe(el);

});


// Navbar Shadow Effect

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background="#031c16";
navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

}else{

navbar.style.background="#052b22";
navbar.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

}

});


// Button Hover Animation

document.querySelectorAll(
".btn-primary,.btn-secondary"
).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});


// Course Card Tilt Effect

document.querySelectorAll(".course-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

const rotateY = (x - 150) / 20;
const rotateX = (150 - y) / 20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


// Auto Update Footer Year

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© 2024 - ${year} Dawah Education & E-learning Nexus`;

}


// Welcome Message

setTimeout(()=>{

console.log(
"Welcome to DEEN - Knowledge Changes Lives"
);

},2000);


// Scroll To Top Button Create

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#052b22";
topBtn.style.fontSize = "22px";
topBtn.style.fontWeight = "bold";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow =
"0 8px 20px rgba(0,0,0,.3)";


window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


// Image Zoom Effect

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition="0.4s";
img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

  

// DEEN Signature

console.log(`
======================================
DEEN
Knowledge Changes Lives
Dawah Education & E-learning Nexus
======================================
`);body{
opacity:0;
transition:1s;
}

.show{
opacity:1 !important;
transform:translateY(0) !important;
}

.card,
.course-card,
.gallery-grid img,
.welcome-content,
.welcome-image,
.vision,
.contact-section{
opacity:0;
transform:translateY(50px);
transition:1s;
}
