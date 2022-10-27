
let typed = new Typed(".auto-input", {
    strings: ["MERN Stack Developer.", "Problem Solver.", "I Love Coding.", "I Love to Develop."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px");
})
document.addEventListener("click", () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
window.onscroll = () => {
}
window.addEventListener('scroll', (e) => {
    var q=window.document.body.scrollTop.toFixed();
    console.log(q+"-");
})

// function func(){
//     let q = document.querySelector("#body").scrollTop.toFixed();
//     console.log(q);

// }