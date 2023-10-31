const burgerBtn = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const navItem = document.querySelector('.nav-item');

const showList = () => {
	navItems.classList.toggle('active');
	burgerBtn.classList.toggle('is-active');
};

const hideList = () => {
	navItems.classList.remove('active');
};

navItem.addEventListener('click', hideList);
burgerBtn.addEventListener('click', showList);
