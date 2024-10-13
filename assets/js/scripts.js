const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const themeActualLocalStorage = localStorage.getItem("theme");

themeActualLocalStorage && rootHtml.setAttribute("data-theme", themeActualLocalStorage);

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light")
        localStorage.setItem("theme","light")
    }
    else {
        rootHtml.setAttribute("data-theme", "dark")
        localStorage.setItem("theme","dark")
    };

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener('click', changeTheme);


const accordionHeaders = document.querySelectorAll(".accordion__header")

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle("active");
    })
}
)

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((item) => {
    item.addEventListener(("click"), () => {
        menuLinks.forEach((item) => {
            item.classList.remove("active");
        })
        item.classList.add("active");
    })
})


