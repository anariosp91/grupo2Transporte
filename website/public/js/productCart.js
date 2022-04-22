const li = document.querySelectorAll(".li");
const section = document.querySelectorAll(".section");


li.forEach((cadaLi, i) => {
    li[i].addEventListener("click", () => {
        li.forEach((cadaLi, i) => {
            li[i].classList.remove("activo");
            section[i].classList.remove("activo");
        })
        li[i].classList.add("activo");
        section[i].classList.add("activo");
    })

})