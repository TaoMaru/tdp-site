
let screenWidth = window.innerWidth;
const updateScreenWidth = () => {
    screenWidth = window.innerWidth;
    console.log(screenWidth)
};

const backToTop = document.getElementById("back-to-top");
let scrollPos = 0;
const toggleBackToTop = () => {
    scrollPos = window.scrollY;
    console.log("scrollpos:", scrollPos)
    if(scrollPos > 1239){
        backToTop.setAttribute("class", "back-to-top");
    }else{
        backToTop.setAttribute("class", "back-to-top hidden-back-to-top");
    }
};
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

backToTop.addEventListener("click", scrollToTop);

window.addEventListener("resize", updateScreenWidth);
window.addEventListener("scroll", toggleBackToTop)

const navBar = document.querySelector(".nav-bar");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const homePicContainer = document.querySelector(".home-picture");
const homeContainer = document.querySelector(".home-container");
const mainBgContainer = document.querySelector(".main-background-container");
const textContent = document.querySelectorAll(".main-content");
const aboutIntro = document.getElementById("about-intro");
const aboutSubIntro = document.getElementById("about-sub-intro");
const aboutSecond = document.getElementById("about-second");
const aboutEnd = document.getElementById("about-end");
const aboutSections = document.querySelectorAll(".about-section");
const aboutTextContent = document.querySelectorAll(".about-content");

const setNavType = () => {
    if(screenWidth < 721){
        let hamburgerAux = document.querySelector(".hamburger-nav-bar-aux");
        if(hamburgerAux){
            hamburgerAux.remove()
        }
        navBar.setAttribute("class", "nav-bar flex jstart astart hamburger-nav-bar");
        navList.setAttribute("class", "nav-list flex jcenter acenter hidden-nav-list");
        hamburgerAux = document.createElement("span");
        hamburgerAux.setAttribute("class", "hamburger-nav-bar-aux");
        navBar.appendChild(hamburgerAux)
    }else if(screenWidth >= 721){
        navBar.setAttribute("class", "nav-bar flex jspaced acenter");
        navList.setAttribute("class", "nav-list flex jcenter acenter");
        let hamburgerAux = document.querySelector(".hamburger-nav-bar-aux");
        if(hamburgerAux){
            hamburgerAux.remove()
        }
    }
    console.log(navList.getAttribute("class"))
};

const toggleMenu = () => {
    if(navBar.getAttribute("class").includes("clicked")){
        let hamburgerAux = document.querySelector(".hamburger-nav-bar-aux-clicked");
        hamburgerAux.setAttribute("class", "hamburger-nav-bar-aux");
        navBar.setAttribute("class", "nav-bar flex jstart astart hamburger-nav-bar");
        navList.setAttribute("class", "nav-list flex jcenter acenter hidden-nav-list");
    }else {
        let hamburgerAux = document.querySelector(".hamburger-nav-bar-aux");
        hamburgerAux.setAttribute("class", "hamburger-nav-bar-aux-clicked");
        navBar.setAttribute("class", "nav-bar flex jstart astart hamburger-nav-bar hamburger-nav-bar-clicked");
        navList.setAttribute("class", "nav-list flex jcenter acenter hidden-nav-list hidden-nav-list-clicked");
    }
}

const resizeHomePic = () => {
    if(screenWidth < 950){
        homePicContainer.setAttribute("class", 
            "circle-container flex jcenter acenter home-picture small-circle-container");
    }else if(screenWidth >= 950){
        homePicContainer.setAttribute("class", "circle-container flex jcenter acenter home-picture")
    }
}

const setHomeContainerClass = () => {
    if(screenWidth < 600){
        homeContainer.setAttribute("class", "content-area home-container flex flex-col jeven acenter");
    }else if(screenWidth >= 600){
        homeContainer.setAttribute("class", "content-area home-container flex jeven acenter")
    }
}

const setMainBgImage = () => {
    if(screenWidth < 600){
        mainBgContainer.setAttribute("class", "floating-container main-background-container small-main-bg-container");
    }else if(screenWidth >= 600){
        mainBgContainer.setAttribute("class", "floating-container main-background-container");
    }
}

const setMainTextSize = () => {
    if(screenWidth < 650){
        textContent.forEach((text) => {
            if(text.getAttribute("class").includes("about-content")){
                text.setAttribute("class", "main-content about-content small-content");
            }else{
                text.setAttribute("class", "main-content small-content");
            }
        })
    }
}

const setAboutContent = () => {
    if(screenWidth < 650){
        aboutIntro.textContent = `In 2017 Cees Schnellink gave me a chance to assist him and his engineers at Studio-T.`;
        aboutSubIntro.textContent = `In 2019 I started studying music production and audio design at the University of Arts in Utrecht (Hogeschool van de Kunsten Utrecht).`;
        aboutSecond.textContent = `In 2023 - 2024 I set up Third Place with Jeremy Leung to make promotional content for young musicians.`;
        aboutEnd.textContent = `I strive to build work environments where engineers can collaborate as a team to promote professional and personal growth.`;
        aboutSections.forEach((section) => {
            section.setAttribute("class", "about-section flex jspaced astart wrap small-about-section")
        });
        aboutTextContent.forEach((content) => {
            content.setAttribute("class", "main-content about-content small-about-content")
        });
    }else if(screenWidth >= 650){
        aboutIntro.textContent = `In 2017 Cees Schnellink gave me a chance to assist him and his engineers at Studio-T.\r\n
                                In 2019 I started studying music production and audio design at the University of Arts in Utrecht (Hogeschool van de Kunsten Utrecht), which I'm still associated with.`;
        aboutSubIntro.textContent = `Ever since Cees gave me the chance of starting out in this field, I've been trying to repay those chances.\r\n 
                                I aim to help aspiring musicians and to create space for audio designers to discover and develop their talents.`
        aboutSecond.textContent = `In 2023 - 2024 I set up Third Place together with Jeremy Leung, whom I met during my studying years.\r\n 
                                Third place for me was a pilot to make promotional content for young musicians, released under our YouTube channel.`
        aboutEnd.textContent = `I strive to build work environments where engineers can collaborate in an "as a team, for the team" structure rather than a competitive hierarchic structure to promote professional and personal growth.`;
        aboutSections.forEach((section) => {
            section.setAttribute("class", "about-section flex jspaced astart wrap")
        });
        aboutTextContent.forEach((content) => {
            content.setAttribute("class", "main-content about-content")
        });
    }
}

const setAttributes = () => {
    setHomeContainerClass();
    setNavType();
    resizeHomePic();
    setMainBgImage();
    // setMainTextSize();
    setAboutContent();
    toggleBackToTop();
}

navBar.onclick = toggleMenu;

window.onload = setAttributes;
window.onresize = setAttributes;