// ======================================
// DEEN PREMIUM SCRIPT v2.0
// Dawah Education & E-learning Nexus
// Knowledge Changes Lives
// ======================================


// Page Load Effect
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("DEEN Website Loaded Successfully");

});



// ======================================
// Reveal Animation
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".card,.course-card,.gallery-item,.welcome-content,.welcome-image,.vision,.contact-section"
).forEach((el) => {

    observer.observe(el);

});



// ======================================
// Navbar Shadow Effect
// ======================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "#031c16";
        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "#052b22";
        navbar.style.boxShadow =
        "0 5px 15px rgba(0,0,0,.2)";

    }

});



// ======================================
// Premium Button Hover
// ======================================

document.querySelectorAll(
".btn-primary,.btn-secondary"
).forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px) scale(1)";

    });

});



// ======================================
// Course Card 3D Effect
// ======================================

document.querySelectorAll(".course-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 20;
        const rotateX = (rect.height / 2 - y) / 20;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});



// ======================================
// Footer Year Auto Update
// ======================================

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
    `© 2024 - ${year} Dawah Education & E-learning Nexus`;

}



// ======================================
// Welcome Console Message
// ======================================

setTimeout(() => {

console.log(
"Welcome to DEEN - Knowledge Changes Lives"
);

}, 1500);



// ======================================
// Scroll To Top Button
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "scrollTopBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

position: "fixed",
bottom: "25px",
right: "25px",
width: "55px",
height: "55px",
border: "none",
borderRadius: "50%",
background: "#d4af37",
color: "#052b22",
fontSize: "24px",
fontWeight: "bold",
cursor: "pointer",
display: "none",
zIndex: "9999",
boxShadow:
"0 10px 25px rgba(0,0,0,.3)"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// ======================================
// Premium Image Hover Effect
// ======================================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = "0.4s";
        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});



// ======================================
// Smooth Anchor Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// ======================================
// DEEN Signature
// ======================================

console.log(`

=========================================
DEEN
Dawah Education & E-learning Nexus
Knowledge Changes Lives
=========================================

`);

/* ==========================
   DEEN MOBILE MENU
========================== */

const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.getElementById("nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}
