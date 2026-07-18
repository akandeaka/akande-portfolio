/*=========================================================
  AKANDE AKINPELU PORTFOLIO
  script.js
  PART 1
==========================================================*/

"use strict";

/*=========================================================
NAVBAR SCROLL EFFECT
==========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/*=========================================================
ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*=========================================================
FADE-IN ON SCROLL
==========================================================*/

const revealElements = document.querySelectorAll(

".skill-card, .project-card, .cert-card, .contact-card, .profile-card, .stat-card"

);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/*=========================================================
COUNTER ANIMATION
==========================================================*/

const counters = document.querySelectorAll(".stat-card h3");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const trigger = document.querySelector(".hero-stats");

    if(!trigger) return;

    const top = trigger.getBoundingClientRect().top;

    if(top < window.innerHeight){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let current = 0;

            const speed = Math.max(20, target/2);

            const update=()=>{

                if(current < target){

                    current++;

                    counter.innerText=current+"+";

                    setTimeout(update,speed);

                }else{

                    counter.innerText=target+"+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll",startCounters);

window.addEventListener("load",startCounters);


/*=========================================================
TYPEWRITER EFFECT
==========================================================*/

const typeTarget = document.querySelector(".hero-section h2");

const originalText = typeTarget ? typeTarget.innerHTML : "";

if(typeTarget){

    typeTarget.innerHTML="";

}

let charIndex = 0;

function typeWriter(){

    if(!typeTarget) return;

    if(charIndex < originalText.length){

        typeTarget.innerHTML += originalText.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,20);

    }

}

window.addEventListener("load",typeWriter);


/*=========================================================
BACK TO TOP BUTTON
==========================================================*/

const backTop=document.createElement("button");

backTop.innerHTML='<i class="fas fa-arrow-up"></i>';

backTop.className="back-to-top";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.classList.add("active");

    }else{

        backTop.classList.remove("active");

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================================
END OF PART 1
PART 2 CONTINUES BELOW
==========================================================*/
/*=========================================================
AKANDE AKINPELU PORTFOLIO
script.js
PART 2
==========================================================*/

/*=========================================================
PROJECT CARD HOVER EFFECT
==========================================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/*=========================================================
SKILL CARD HOVER EFFECT
==========================================================*/

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


/*=========================================================
COPY EMAIL TO CLIPBOARD
==========================================================*/

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {

    link.addEventListener("click", function () {

        navigator.clipboard.writeText("akande.akinpelu913@gmail.com");

    });

});


/*=========================================================
CURRENT YEAR
==========================================================*/

const yearElement = document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/*=========================================================
PRELOADER (Optional)
==========================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".preloader");

    if (loader) {

        loader.classList.add("loaded");

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/*=========================================================
NAVBAR CLOSE AFTER MOBILE CLICK
==========================================================*/

const navCollapse = document.querySelector(".navbar-collapse");

const navItems = document.querySelectorAll(".navbar-nav .nav-link");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navCollapse.classList.contains("show")) {

            bootstrap.Collapse.getInstance(navCollapse).hide();

        }

    });

});


/*=========================================================
SCROLL PROGRESS BAR
==========================================================*/

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================================
CONSOLE MESSAGE
==========================================================*/

console.log("%cWelcome to Akande Akinpelu Portfolio",
"color:#0d6efd;font-size:18px;font-weight:bold;");

console.log("%cEnterprise IT | Business Systems | Automation | Cybersecurity",
"color:#ffc107;font-size:14px;");


/*=========================================================
INITIALIZE ALL FUNCTIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    revealOnScroll();

    startCounters();

});


/*=========================================================
END OF SCRIPT.JS
==========================================================*/
