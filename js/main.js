const nav = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".navbar-mobile__link")
const offersBoxOne = document.querySelector(".offers__box-one")
const offers = document.querySelector("#offers")
console.log(offers)

const navAnim = () => {
	nav.classList.toggle("navbar-mobile--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("navbar-mobile--active")
		})
	})
}

// const paralax = () => {
// 	const value = offers.scrollY
// 	offersBoxOne.style.top = value * 2 + "px"
// }

// window.addEventListener("scroll", paralax)

navBtn.addEventListener("click", navAnim)
