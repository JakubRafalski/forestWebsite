let burgerBtn;
let navItems;
let navItem;
let date;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	showYear();
};

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.hamburger');
	navItems = document.querySelector('.nav__mobile-items');
	navItem = document.querySelector('.nav__mobile-item');
	date = document.querySelector('.date');
};
const prepareDOMEvents = () => {
	navItem.addEventListener('click', hideList);
	burgerBtn.addEventListener('click', showList);
};

const showList = () => {
	navItems.classList.toggle('active');
	burgerBtn.classList.toggle('is-active');
};

const hideList = () => {
	navItems.classList.remove('active');
};

const showYear = () => {
	const year = new Date().getFullYear();
	date.textContent = year;
};

document.addEventListener('DOMContentLoaded', main);
