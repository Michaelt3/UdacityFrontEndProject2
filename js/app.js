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

function highlightHeaderHelper(section, sectionHeader) {
    if(section.getBoundingClientRect().top > 1){
        sectionHeader.classList.remove('active-header');
    }
    else if(section.getBoundingClientRect().bottom < window.innerHeight){
        sectionHeader.classList.add('active-header');
    }
    if(section.getBoundingClientRect().bottom < 0){
        sectionHeader.classList.remove('active-header');
    }
}

function highlightSectionHelper(section) {
    console.log(section.getBoundingClientRect().top)
    console.log(section.getBoundingClientRect().bottom)
    console.log(window.innerHeight)

    if(section.getBoundingClientRect().top > 1){
        section.classList.remove('section-highlighted');
    }
    else if(section.getBoundingClientRect().bottom < window.innerHeight){
        section.classList.add('section-highlighted');
    }
    if(section.getBoundingClientRect().bottom < 0){
        section.classList.remove('section-highlighted');
    }
}

function scrollHelper(sectionNumber) {
    console.log(sectionNumber)
    sections[sectionNumber].scrollIntoView({behavior: "smooth"})
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
       newElement.className=""
       newElement.id="sectionHeader"
       navAddition.appendChild(newElement)
   }
}

// Add class 'active' to section when near top of viewport
function sectionHighlight() {
    for (const section of sections){
        window.addEventListener('scroll', () => highlightSectionHelper(section))
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection () {
    const sectionHeaders=document.querySelectorAll('#sectionHeader');
    console.log(sectionHeaders)
    for (var i = 0; i < sectionHeaders.length; i++) {
        let sectionNumber=i
        sectionHeaders[i].addEventListener('click', () => scrollHelper(sectionNumber))
        window.addEventListener('scroll', () => highlightHeaderHelper(sections[sectionNumber],sectionHeaders[sectionNumber]))
      }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


