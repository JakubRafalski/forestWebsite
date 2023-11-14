let burgerBtn = document.querySelector('.hamburger');
let navBox = document.querySelector('.nav__items');
let navItems = document.querySelectorAll('.nav__item');
let date = document.querySelector('.date');

const showList = () => {
	navBox.classList.toggle('active-nav');
	burgerBtn.classList.toggle('is-active');

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBox.classList.remove('active-nav');
			burgerBtn.classList.remove('is-active');
		});
	});
};

const homeHighlighted = () => {
	if (document.body.classList.contains('main-page')) {
		navItems[0].classList.add('active');
	}
};

const showYear = () => {
	const year = new Date().getFullYear();
	date.textContent = year;
};

showYear();
burgerBtn.addEventListener('click', showList);
window.addEventListener('load', homeHighlighted);

