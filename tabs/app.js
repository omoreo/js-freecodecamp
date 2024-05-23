const tabBtn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", (e) => {
    // console.log(e.target.dataset.id) // get (id) form button element
    const id = e.target.dataset.id
    if(id){
        //remove selected from other buttons
        tabBtn.forEach(btn => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        //hide other article
        articles.forEach(article => {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})