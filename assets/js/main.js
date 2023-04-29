const d = document
const showDivi = d.querySelector(".show div")
const button = d.querySelector(".button")
const inputPicker = d.querySelector("input")
const colorDate = d.querySelector(".colorDate")

console.log(inputPicker)


button.addEventListener("click",e=>{
    console.log(e)
    colorDate.textContent = inputPicker.value
    showDivi.style.backgroundColor = inputPicker.value

})