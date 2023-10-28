const burgerBtn = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

const showList = () => {
	navItems.classList.toggle('active');
	burgerBtn.classList.toggle('is-active');
};

burgerBtn.addEventListener('click', showList);
