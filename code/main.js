let main = document.querySelector('.main');
let addTaskButton = document.querySelector('.addTask');
let addEventButton = document.querySelector('.addEvent');

themeToggle.addEventListener('click', () => {
	if (themeToggle.classList.contains('themeToggleOFF')) {
		main.classList.remove('mainActive');
		main.classList.add('mainOFF');
		addTaskButton.classList.remove('addTaskActive');
		addTaskButton.classList.add('addTaskOFF');
		addEventButton.classList.remove('addEventActive');
		addEventButton.classList.add('addEventOFF');
	} else {
		main.classList.remove('mainOFF');
		main.classList.add('mainActive');
		addTaskButton.classList.remove('addTaskOFF');
		addTaskButton.classList.add('addTaskActive');
		addEventButton.classList.remove('addEventOFF');
		addEventButton.classList.add('addEventActive');	
	}
})


addTaskButton.addEventListener('click', () => {
	console.log('addTask button clicked');
	postData('addTask.php', {answer: 42}).then((data) => {
		console.log(data.answer);
	})
})

addEventButton.addEventListener('click', () => {
	console.log('addEvent button clicked');
})

//// Определяем функцию которая принимает в качестве параметров url и данные которые необходимо обработать
const postData = async (url = '', data = {}) => {
	// Формируем запрос
	const response = await fetch(url, {
		// По умолчанию метод GET
		method: 'POST',
		// Заголовок
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return await response.json();
}