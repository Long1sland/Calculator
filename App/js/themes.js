const root = document.documentElement
const theme1 = document.querySelector("#theme1")
const theme2 = document.querySelector("#theme2")
root.classList.add("theme1")

theme1.addEventListener("click", () => {
    root.classList.add("theme1")
    root.classList.remove("theme2")
    console.log("theme1 added")
})

theme2.addEventListener("click", () => {
    root.classList.add("theme2")
    root.classList.remove("theme1")
    console.log("theme2 added")
})