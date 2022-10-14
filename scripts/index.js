let inputName = document.getElementById("name")
// let valueName = document.getElementById("name-value")

// inputName.addEventListener('input', updateValue)

// function updateValue(e) {
//   valueName.innerText = e.target.value;
// }

let homeButton = document.getElementById("home-button")
let homePage = document.getElementById("home-page")
let orderButton = document.getElementById("order-button")
let orderPage = document.getElementById("order-page")
let outputPage = document.getElementById("output-page")

homeButton.addEventListener('click', () => {
  if (orderPage.style.display === 'none') {
    orderPage.style.display = 'block'
    homePage.style.display = 'none'
  } else {
    orderPage.style.display = 'none'
  }
})

orderButton.addEventListener('click', () => {
  if (outputPage.style.display === 'none') {
    outputPage.style.display = 'block'
    orderPage.style.display = 'none'
  } else {
    outputPage.style.display = 'none'
  }
})

