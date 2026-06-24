

// ======================================
// DEEN PREMIUM WEBSITE SCRIPT
// Dawah Education & E-learning Nexus
// Knowledge Changes Lives
// ======================================


// Page Loaded

window.addEventListener("load", () => {

document.body.classList.add("loaded");

console.log("DEEN Website Loaded Successfully");

});


// ==========================
// MOBILE MENU
// ==========================

const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.getElementById("nav-menu");

if(menuToggle && navMenu){

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

}


// ==========================
// STICKY NAVBAR EFFECT
// ==========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.style.background =
"rgba(3,17,12,.98)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.20)";

}else{

navbar.style.background =
"rgba(5,26,19,.95)";

navbar.style.boxShadow =
"0 4px 20px rgba(0,0,0,.15)";

}

});


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements =
document.querySelectorAll(
".welcome-card,.vision-card,.department-card,.course-card,.notice-card,.event-card,.contact-card,.donation-card,.stat-card"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach((el)=>{
observer.observe(el);
});


// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
counter.innerText.replace("+","");

if(isNaN(target)) return;

let current =
+counter.getAttribute("data-count") || 0;

const increment =
target / 60;

if(current < target){

current += increment;

counter.innerText =
Math.ceil(current) + "+";

counter.setAttribute(
"data-count",
current
);

setTimeout(updateCounter,20);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});


// ==========================
// ACTIVE MENU LINK
// ==========================

const currentPage =
location.pathname.split("/").pop();

document
.querySelectorAll(".nav-menu a")
.forEach(link=>{

const href =
link.getAttribute("href");

if(href === currentPage){

link.style.color =
"#D4AF37";

}

});


// ==========================
// IMAGE HOVER EFFECT
// ==========================

document
.querySelectorAll(".gallery-grid img")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform =
"scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform =
"scale(1)";

});

});


// ==========================
// COURSE CARD EFFECT
// ==========================

document
.querySelectorAll(".course-card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0)";

});

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";

topBtn.style.width = "55px";
topBtn.style.height = "55px";

topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";

topBtn.style.background =
"#D4AF37";

topBtn.style.color =
"#051A13";

topBtn.style.fontSize = "24px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "9999";

topBtn.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

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


// ==========================
// FOOTER YEAR AUTO UPDATE
// ==========================

const copyright =
document.querySelector(".copyright");

if(copyright){

const year =
new Date().getFullYear();

copyright.innerHTML =

`© 2024 - ${year}
Dawah Education & E-learning Nexus
<br>
Knowledge Changes Lives`;

}


// ==========================
// DEEN SIGNATURE
// ==========================

console.log(`
=================================
DEEN
Dawah Education & E-learning Nexus
Knowledge Changes Lives
=================================
`);
/* Reveal Animation */

.show{
opacity:1 !important;
transform:translateY(0) !important;
}

.welcome-card,
.vision-card,
.department-card,
.course-card,
.notice-card,
.event-card,
.contact-card,
.donation-card,
.stat-card{

opacity:0;
transform:translateY(40px);

transition:all .8s ease;

}


/* Page Load */

body{

opacity:0;

transition:opacity .8s ease;

}

body.loaded{

opacity:1;

}

// ==========================
// HERO AUTO SLIDER
// ==========================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

slides.forEach(slide=>{

slide.classList.remove("active");

});

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide]
.classList.add("active");

}

if(slides.length > 0){

setInterval(changeSlide,5000);

}

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load",()=>{

const preloader =
document.getElementById("preloader");

if(preloader){

setTimeout(()=>{

preloader.style.opacity="0";

setTimeout(()=>{

preloader.style.display="none";

},1000);

},1200);

}

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target/100;

if(count<target){

counter.innerText =
Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

