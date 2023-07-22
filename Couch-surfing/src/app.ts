const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
let isOpen: boolean

const reviews: {
	name: string
	stars: number
	loyaltyUser: boolean
	date: string
}[] = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: true,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: false,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: true,
		date: '27-03-2021',
	},
]

const info: {
	image: string
	title: string
	price: number
	firstLine: { adress: string; number: number }
	town: string
	country: string
	contactInfo: (string | number | boolean)[]
	isAvaiable: boolean
}[] = [
	{
		image: 'img/src/..',
		title: 'Nordic Heaven',
		price: 200,
		firstLine: {
			adress: 'Kowalskiego',
			number: 44,
		},
		town: 'Bydgoszcz',
		country: 'Poland',
		contactInfo: ['Pomoroska', 42, true],
		isAvaiable: true,
	},
]

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
	const iconDisplay = isLoyalty ? '⭐' : ''
	reviewTotalDisplay.innerHTML =
		'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
	firstName: string
	lastName: string
	isReturning: boolean
	age: number
	stayedAt: string[]
} = {
	firstName: 'Bobby',
	lastName: 'Brown',
	isReturning: true,
	age: 35,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
}

function populateUser(isReturning: boolean, userName: string) {
	if (isReturning == true) {
		returningUserDisplay.innerHTML = 'back'
	}
	userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)

// 1. Funkcja która pokaże nam liczbę recenzji oraz wyswietli kto napisał ostatnią recenzje, dodatkowo jesli uzytownki ma loyalityuser na true ( boolean), to ma mu sie dodac gwiazdka na koncu
