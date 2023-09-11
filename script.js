// let str = '15.02.2023'

// str = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$2/$1/$3')
// console.log(str)


//Задача  1. Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string). З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих, у яких перша і остання літери однакові.
// let arr = ['99', '78', '34', '7098', '21', '9709', '3563']
// let rusultListNumber = []
// if (/[0-9]/.test(arr)) {
// 	for (const num of arr) {
// 		if (/([0-9])(.*)(\1)/.test(num)) rusultListNumber.push(`${num}/`)
// 	}
// } else alert('not')

// alert(rusultListNumber) 

//Задача 2. Замінити номер розділяючи послідовності цифр дефісом згідно з форматом: 0504546626   🡪  +380-50-45-466-26
// let number = '+380953768367'
// function replacer(match, p1, p2, p3, p4, p5) {
// 	return [p1, p2, p3, p4, p5].join('-')
// }
// let res = number.replace(/(\d{3})(\d{2})(\d{2})(\d{3})(\d{2})/, replacer)
// alert(res)

//Задача 3. Після кожного значення року після 2000 року додати «р.»
//«Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., а в школі пішов 2007р.»
// let string = 'Я народився 2001, а в школі пішов 2007 1989'
// let res = string.replace(/2\d{3}/g, '$&р')
// alert(res)

// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524

// let number = '7557575457896524'
// let res = number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
// alert(res)

//Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
// let ageStudent = [13, 15, 7, 9, 34, 21, 13]
// let map = new Map()

// for (const el of ageStudent) {
// 	let elCount = map.get(el) || 0
// 	map.set(el, elCount + 1)
// }
// console.log(map)

// let maxNum = 0
// let maxkey = 0
// map.forEach((val, key) => {
// 	if (maxNum < key) {
// 		maxNum = key
// 		maxkey = key
// 		}
// 	})
// console.log(maxkey)

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
// let arrBooks = [
// 	{
// 		name: 'The Housemaid',
// 		year: 2022,
// 		autor: 'Freida McFadden'
// 	},
// 	{
// 		name: 'The Locked Door',
// 		year: 2022,
// 		autor: 'Freida McFadden'
// 	},
// 	{
// 		name: 'Fourth Wing (The Empyrean, 1)',
// 		year: 2021,
// 		autor: 'Rebecca Yarros'
// 	}
// ]
// let map = new Map()

// arrBooks.forEach(book => {
// 	let autor = book.autor
// 	let countBook = map.get(autor) || 0
// 	map.set(autor, countBook + 1)
// })
// console.log(map)

// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
// let visitHistory = ['user4', 'user1', 'user8', 'user4', 'user2', 'user4', 'user2', 'user5']
// let map = new Map()

// for (const user of visitHistory) {
// 	let userCount = map.get(user) || 0
// 	map.set(user, userCount + 1)
// }
// console.log(map)

// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 
// let students = [
// 	{
// 		name: 'Natalya',
// 		course: 4,
// 		faculty: 5
// 	},
// 	{
// 		name: 'Igor',
// 		course: 3,
// 		faculty: 1
// 	},
// 	{
// 		name: 'Irina',
// 		course: 1,
// 		faculty: 2
// 	},
// 	{
// 		name: 'Diana',
// 		course: 4,
// 		faculty: 3
// 	},
// 	{
// 		name: 'Dasha',
// 		course: 5,
// 		faculty: 4
// 	},
// 	{
// 		name: 'Denis',
// 		course: 5,
// 		faculty: 2
// 	}
// ]
// let set = new Set()
// let map = new Map()
// students.forEach(student => {
// 	set.add(student.faculty)
// 	let countCourse = map.get(student.course) || 0
// 	map.set(student.course, countCourse + 1)
// })
// console.log(set.size)
// console.log(map)

//Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// let map = new Map()

// for (const temperatur of temperatures) {
// 	let countTemp = map.get(temperatur) || 0
// 	map.set(temperatur, countTemp + 1)
// }
// let roundedTemperatures = temperatures.map(temperatur => Math.ceil(temperatur))
// console.log(map)
// console.log(roundedTemperatures)

// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
// let mathList = ['Gigi', 'Zelenskiy', 'Budanov', 'Fomenko', 'Shevchenko', 'Friz', 'Roko']
// let historyList = ['Zelenskiy', 'Hofor', 'Rolan', 'Switolina', 'Shevchenko']

// let mathListSet = new Set(mathList)
// let historyListSet = new Set(historyList)

// let countBothGroups = 0
// for (const user of historyListSet) {
// 	if (mathListSet.has(user)) countBothGroups++
// }
// console.log(countBothGroups)

// let globalSet = new Set([...mathList, ...historyList])
// console.log(globalSet)

// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
//  <input type="color">. */}
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

// function saveColor() {
// 	let color = inpColor.value
// 	localStorage.setItem("myColor", color)

// 	let counter = parseInt(sessionStorage.getItem("counterColors") || 0)
// 	counter++
// 	sessionStorage.setItem("counterColors", counter)
// 	times.innerText = `Кількість змін - ${sessionStorage.getItem("counterColors")}`


// }
// inpColor.onchange = saveColor

// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

let tasks = ['Випити чай', 'Зробити ДЗ', 'Погуляти з котом', 'Нагодувати кота']



function startGenerateRandomAffairs() {
	
	localStorage.setItem("Affairs", JSON.stringify(tasks))
	let startInterval = setInterval(() => {
		let todoList = JSON.parse(localStorage.getItem("Affairs"))
		console.log(todoList)
		let randomAffair = 0 + Math.floor(Math.random() * todoList.length)
		if (todoList.length) {
			if (confirm(todoList[randomAffair])) {
				todoList.splice(randomAffair, 1)
				localStorage.setItem("Affairs", JSON.stringify(todoList))
			}
		} else {
			localStorage.removeItem("Affairs")
			clearInterval(startInterval)
		}
	}, 2000)
	// setTimeout(() => localStorage.removeItem("Affairs"), 12000)
}
startGenerateRandomAffairs()



