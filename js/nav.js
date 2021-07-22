const navCodingLink = document.querySelector(".nav-coding")
const navArtLink = document.querySelector(".nav-art")
const navStartupLink = document.querySelector(".nav-startup")

const navCoding = document.querySelector(".main-coding");
const navArt = document.querySelector(".main-art");
const navStartup = document.querySelector(".main-startup");

const nav = document.querySelector(".nav")

const SHOWING_CN = "showing"

function handleCodingClick() {
    navArt.classList.remove(SHOWING_CN);
    navStartup.classList.remove(SHOWING_CN);
    navCoding.classList.add(SHOWING_CN);
    nav.classList.remove(SHOWING_CN)
}

function handleArtClick() {
    navStartup.classList.remove(SHOWING_CN);
    navCoding.classList.remove(SHOWING_CN);
    navArt.classList.add(SHOWING_CN);
    nav.classList.remove(SHOWING_CN)
}

function handleStartupClick() {
    navArt.classList.remove(SHOWING_CN);
    navCoding.classList.remove(SHOWING_CN);
    navStartup.classList.add(SHOWING_CN);
    nav.classList.remove(SHOWING_CN)
}

function close() {
    navCoding.addEventListener("click", () => {
        navCoding.classList.remove(SHOWING_CN)
        nav.classList.add(SHOWING_CN)
    })
    navArt.addEventListener("click", () => {
        navArt.classList.remove(SHOWING_CN)
        nav.classList.add(SHOWING_CN)
    })
    navStartup.addEventListener("click", () => {
        navStartup.classList.remove(SHOWING_CN)
        nav.classList.add(SHOWING_CN)
    })
}

function init() {
    navCodingLink.addEventListener("click", handleCodingClick);
    navArtLink.addEventListener("click", handleArtClick);
    navStartupLink.addEventListener("click", handleStartupClick);
    close();
}

init();