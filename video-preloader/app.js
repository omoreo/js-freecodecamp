// THE DOMContentLoaded evnet fires when the initial HTML
// document has been completely loadded and PaymentRequestUpdateEvent, without
// waiting for styleseheets, imasgess, and subframes to finish
// loading.
// The load event is fired when the whole page has loaded,
// imcluding all dopendent resources such as stylessheets and images

const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
// switch-btn
btn.addEventListener("click", () => {
    if(!btn.classList.contains('slide')){
        btn.classList.add("slide")
        video.pause();
    } else {
        btn.classList.remove("slide")
        video.play();
    }
})

//preloader
const preloader = document.querySelector(".preloader")

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader")
})