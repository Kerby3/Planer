let themeToggle = document.querySelector('.themeToggle');
let dateHeader = document.querySelector('.date');
let timeHeader = document.querySelector('.time');
let header = document.querySelector('.header');
let date;
let time;
let hours;
let minutes;

let showTime = () => {
	let now = new Date();
	date = now.toLocaleDateString();
	hours = now.getHours();
	if (hours < 10) {
		hours = 0 + "" + hours;
	}
	minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = 0 + "" + minutes;
	}
	time = hours + ":" + minutes;
	dateHeader.textContent = date;
	timeHeader.textContent = time;
	setTimeout(showTime, 1000); 
}
showTime();

themeToggle.addEventListener('click', () => {
	if (themeToggle.classList.contains('themeToggleActive')) {
		themeToggle.classList.remove('themeToggleActive');
		themeToggle.classList.add('themeToggleOFF');
		header.classList.remove('headerActive');
		header.classList.add('headerOFF');
	} else {
		themeToggle.classList.remove('themeToggleOFF');
		themeToggle.classList.add('themeToggleActive');
		header.classList.remove('headerOFF');
		header.classList.add('headerActive');
	}
}) 
