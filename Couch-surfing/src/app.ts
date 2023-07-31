import { showReviewTotal, populateUser, getTopTwoReviews } from './utils.js'
import { Permissions, LoyaltyUser } from './enums.js'
import { Price, Country } from './aliases.js'
import { Property } from './interfaces.js'
import Review from './interfaces.js'

const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

// Reviews
const reviews: Review[] = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: LoyaltyUser.GOLD_USER,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: LoyaltyUser.BRONZE_USER,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: LoyaltyUser.SILVER_USER,
		date: '27-03-2021',
	},
]

const you = {
	firstName: 'Bobby',
	lastName: 'Brown',
	permissions: Permissions.ADMIN,
	isReturning: true,
	age: 35,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
}

// Array of Properties
const properties: {
	image: string
	title: string
	price: number
	location: {
		firstLine: string
		city: string
		code: number
		country: string
	}
	contact: [number, string]
	isAvailable: boolean
}[] = [
	{
		image: 'images/colombia-property.jpg',
		title: 'Colombian Shack',
		price: 45,
		location: {
			firstLine: 'shack 37',
			city: 'Bogota',
			code: 45632,
			country: 'Colombia',
		},
		contact: [+112343823978921, 'marywinkle@gmail.com'],
		isAvailable: true,
	},
	{
		image: 'images/poland-property.jpg',
		title: 'Polish Cottage',
		price: 30,
		location: {
			firstLine: 'no 23',
			city: 'Gdansk',
			code: 343903,
			country: 'Poland',
		},
		contact: [+1298239028490830, 'garydavis@hotmail.com'],
		isAvailable: false,
	},
	{
		image: 'images/london-property.jpg',
		title: 'London Flat',
		price: 25,
		location: {
			firstLine: 'flat 15',
			city: 'London',
			code: 35433,
			country: 'United Kingdom',
		},
		contact: [+34829374892553, 'andyluger@aol.com'],
		isAvailable: true,
	},
	{ 
		image: 

	}
	// add another property card. The Property should have:
	// 1 x picture of a 'Malaysian Hotel' called 'Malia Hotel'
	// It should cost 35/night
	// It's location should be 'Room 4, Malia , Malaysia, 45334'
	// The contact email should be 'lee34@gmail.com'
	// The phone number for the property should be +60349822083
	// It should not be available
]

// Functions
showReviewTotal(1, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

let authorityStatus: any

isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
	if (authorityStatus) {
		const priceDisplay = document.createElement('div')
		priceDisplay.innerHTML = price.toString() + '/night'
		element.appendChild(priceDisplay)
	}
}

function add(firstValue: number, secondValue: number): number {
	return firstValue + secondValue
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
	const card = document.createElement('div')
	card.classList.add('card')
	card.innerHTML = properties[i].title
	const image = document.createElement('img')
	image.setAttribute('src', properties[i].image)
	card.appendChild(image)
	propertyContainer.appendChild(card)
	showDetails(you.permissions, card, properties[i].price)
}

let count = 0
function addReviews(array: Review[]): void {
	if (!count) {
		count++
		const topTwo = getTopTwoReviews(array)
		for (let i = 0; i < topTwo.length; i++) {
			const card = document.createElement('div')
			card.classList.add('review-card')
			card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
			reviewContainer.appendChild(card)
		}
		container.removeChild(button)
	}
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['London', '11.03', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

// Classes

class Car {
	make: string
	year: number
	color: string

	constructor(make: string, year: number, color: string) {
		this.make = make
		this.year = year
		this.color = color
	}
}

class MainProperty {
	src: string
	title: string
	reviews: Review[]
	constructor(src: string, title: string, reviews: Review[]) {
		this.src = src
		this.title = title
		this.reviews = reviews
	}
}
let yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian Property', [
	{
		name: 'Oliv',
		stars: 5,
		loyaltyUser: LoyaltyUser.GOLD_USER,
		date: '12-04-2021',
	},
])

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)
