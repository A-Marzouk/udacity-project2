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


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


let sections = document.getElementsByTagName('section');
let ulElement = document.getElementById('navbar__list');
let isScrolling;

buildNavigationBar();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNavigationBar(){
    [...sections].forEach((section) => {
        let liElement = document.createElement('li');
        liElement.setAttribute('id', section.id + '-li');

        let anchorElement = document.createElement('a');
        anchorElement.innerHTML = section.getAttribute('data-nav');
        anchorElement.setAttribute('href', '#' + section.id );

        liElement.append(anchorElement);

        ulElement.appendChild(liElement);
    });
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.getElementById('navbar__list').addEventListener('click',  (event) =>  {
    let sectionID = event.target.getAttribute('href').replace('#','');
    scrollToSection(sectionID);
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu



// Scroll to section on link click
function scrollToSection(sectionID){
    window.scrollTo(sectionID.offsetTop);
};



// Set sections as active
function checkActiveSections() {
    let activeSection = null ;

    [...sections].forEach((section) => {
        // remove all active classes except for the section in viewport.
        let li = document.getElementById(section.id + '-li');

        section.classList.remove('active-section');
        li.classList.remove('active');

        if (section.offsetTop < window.pageYOffset + 200 && section.offsetTop + section.offsetHeight > window.pageYOffset) {
            activeSection = section;
        }

    });

    if(activeSection !== null){
        let li = document.getElementById(activeSection.id + '-li');
        addActiveClassToSection(activeSection,li);
    }
}
function addActiveClassToSection(section,li) {
    section.classList.add('active-section');
    li.classList.add('active');
};


// scroll to top:

let scrollBtn = document.getElementById('scrollTop') ;

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});


window.onscroll = function() {scrollFunction(); checkActiveSections();};

function scrollFunction() {
    if (document.documentElement.scrollTop > 1500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};