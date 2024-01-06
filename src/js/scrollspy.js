const menuItems = document.querySelectorAll('.nav__item');
const scrollSpySections = document.querySelectorAll('.sec');

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 83.4) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);
