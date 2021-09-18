import '../css/style.css'
import 'external-svg-loader'
import 'flickity'

/*Images*/
import '../static/images/desktop-image-hero-1.jpg'
import '../static/images/desktop-image-hero-2.jpg'
import '../static/images/desktop-image-hero-3.jpg'
import '../static/images/image-about-dark.jpg'
import '../static/images/image-about-light.jpg'
import '../static/images/mobile-image-hero-1.jpg'
import '../static/images/mobile-image-hero-2.jpg'
import '../static/images/mobile-image-hero-3.jpg'
import '../static/images/favicon-32x32.png'

/*Icons*/

import '../static/icons/icon-angle-left.svg'
import '../static/icons/icon-angle-right.svg'
import '../static/icons/icon-arrow.svg'
import '../static/icons/icon-close.svg'
import '../static/icons/logo.svg'
import '../static/icons/icon-hamburger.svg'

var flky = new Flickity('.main-carousel', {
    accessibility: true,
    cellSelector: '.carousel-cell',
    freeScroll: false,
    wrapAround: true,
    lazyLoad: false,
    draggable: true,
    prevNextButtons: false,
    pageDots: false,
    resize: true
});

const buttonRight = document.getElementById("arrow-slider-right")
const buttonLeft = document.getElementById("arrow-slider-left")
const nav = document.querySelector('.back-nav')

buttonRight.addEventListener("click", () => {
    flky.next()
})

buttonLeft.addEventListener("click", () => {
    flky.previous()
})

const navBar = (show) => {

    if (show) return nav.classList.add('show-bar')

    nav.classList.remove('show-bar')
}

nav.addEventListener("click", (e) => {
    if (e.target.nodeName === "DIV") nav.classList.remove('show-bar')

})

window.navBar = navBar