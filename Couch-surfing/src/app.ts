import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
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

// Array Task

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
		image: 'img',
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

// User
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

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)
