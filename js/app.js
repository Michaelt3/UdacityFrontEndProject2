/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section')
const navAddition=document.querySelector('#navbar__list');
const sectionLength = document.getElementsByClassName("landing__container").length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function highlightHelper(section) {
    console.log(section.getBoundingClientRect().top)
    console.log(section.getBoundingClientRect().bottom)
    console.log(window.innerHeight)

    if(section.getBoundingClientRect().top > 20){
        section.classList.remove('section-highlighted');
    }
    else if(section.getBoundingClientRect().bottom < window.innerHeight){
        section.classList.add('section-highlighted');
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function domLoaded () {
    addNavBar();
    sectionHighlight();
    scrollToSection();
}

document.addEventListener('DomContentLoaded', domLoaded())

// build the nav

function addNavBar () {
   for (let i =1;i<=sectionLength;i++) {
       const newElement=document.createElement('li');
       newElement.textContent="Section "+i;
       newElement.id="sectionHeader"+i
       navAddition.appendChild(newElement)
   }
}

// Add class 'active' to section when near top of viewport
function sectionHighlight() {
    for (const section of sections){
        window.addEventListener('scroll', () => highlightHelper(section))
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection () {
    const sectionHeader1=document.querySelector('#sectionHeader1');
    const sectionHeader2=document.querySelector('#sectionHeader2');
    const sectionHeader3=document.querySelector('#sectionHeader3');
    sectionHeader1.addEventListener('click', ()=> {sections[0].scrollIntoView({behavior: "smooth"})})
    sectionHeader2.addEventListener('click', ()=> {sections[1].scrollIntoView({behavior: "smooth"})})
    sectionHeader3.addEventListener('click', ()=> {sections[2].scrollIntoView({behavior: "smooth"})})
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


