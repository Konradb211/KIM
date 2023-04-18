const nav = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".navbar-mobile__link")
const offersBoxOne = document.querySelector(".offers__box-one")
const offers = document.querySelector("#offers")

const navAnim = () => {
	nav.classList.toggle("navbar-mobile--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("navbar-mobile--active")
		})
	})
}

navBtn.addEventListener("click", navAnim)
